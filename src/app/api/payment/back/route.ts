import { NextResponse } from 'next/server';
import MercadoPagoService from '@/service/MercadoPagoService';

const APPLICATION_URL = process.env.APPLICATON_URL

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const payment_id = searchParams.get('payment_id') || '';
    await MercadoPagoService.updatePayment(payment_id);
    return NextResponse.redirect(`${APPLICATION_URL}/sucesso`);
  } catch {
    return NextResponse.redirect(`${APPLICATION_URL}/erro`);
  }
}
