import { PrismaClient } from '@prisma/client';
import UserRepository from './UserRepository';
import getPrismaInstance from '@/PrismaProvider/GetPrismaInstance';
import OrderRepository from './OrderRepository';

type InvoiceType = {
  userId: string;
  orderId: string;
  email: string;
  cpf: string;
  firstName: string;
  phone: string;
  surname: string;
  externalReference: string;
};

class InvoiceRepository {
  private readonly _prisma = getPrismaInstance();
  async create(data: InvoiceType) {
    return await this._prisma.invoice.create({ data });
  }

  async getByEmail(email: string) {
    const user = await UserRepository.getByEmail(email);
    if (user == null) return [];
    return await this._prisma.invoice.findMany({
      where: { userId: user.id },
      include: { order: true },
    });
  }

  async countApprovedInvoices() {
    return await this._prisma.invoice.count({ where: { status: 'pending' } });
  }

  async getAllMoneyOfApprovedInvoices() {
    const approvedInvoices = await this._prisma.invoice.findMany({
      where: {
        status: 'pending',
      },
    });

    let total = 0;

    for (const invoice of approvedInvoices) {
      const order = await OrderRepository.getById(invoice.orderId);
      if (order) total += order.total;
    }

    return total;
  }

  async updateInvoice(
    external_reference: string,
    data: { status: string; ipv4: string; paymentMethod: string },
  ) {
    const invoice = await this._prisma.invoice.findFirst({
      where: { externalReference: external_reference },
    });
    return await this._prisma.invoice.update({
      where: {
        id: invoice?.id,
      },
      data,
    });
  }

  async getAll() {
    return await this._prisma.invoice.findMany({
      include: {
        user: true,
      },
    });
  }
}

export default new InvoiceRepository();
