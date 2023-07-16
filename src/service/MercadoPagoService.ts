import InvoiceRepository from '@/repository/InvoiceRepository';
import { UserCart } from '@prisma/client';
import mercadopago from 'mercadopago';

const APPLICATON_URL = process.env.APPLICATION_URL

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN || '',
});

class MercadoPagoService {
  async createPreference(externalReference: string, cartProducts: UserCart[]) {
    let items: any = [];
    cartProducts.forEach((e: any) => {
      items.push({
        title: e.product?.name,
        quantity: e.quantity,
        currency_id: 'BRL',
        unit_price: e.product?.price,
      });
    });
    const preference = {
      items,

      back_urls: {
        success: `${APPLICATON_URL}/api/payment/back`,
        failure: `${APPLICATON_URL}/api/payment/back`,
        pending: `${APPLICATON_URL}/api/payment/back`,
      },
      notification_url: `${APPLICATON_URL}/api/payment/notification`,
      external_reference: externalReference,
    };

    try {
      const response = await mercadopago.preferences.create(preference);
      const initPoint = response.body.init_point;
      return initPoint;
    } catch (error) {
      console.error('Erro ao criar preferência:', error);
    }
  }

  async updatePayment(paymentId: string) {
    const payment = await this.getPayment(Number(paymentId));
    await InvoiceRepository.updateInvoice(payment.external_reference, {
      status: payment.status,
      paymentMethod: payment.payment_method.id,
      ipv4: payment.additional_info.ip_address,
    });
  }

  private async getPayment(paymentId: number) {
    return (await mercadopago.payment.get(paymentId)).body;
  }
}

export default new MercadoPagoService();
