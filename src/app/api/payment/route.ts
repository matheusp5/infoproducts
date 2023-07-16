import { authOptions } from '@/lib/auth';
import CartRepository from '@/repository/CartRepository';
import InvoiceRepository from '@/repository/InvoiceRepository';
import OrderRepository from '@/repository/OrderRepository';
import UserRepository from '@/repository/UserRepository';
import MercadoPagoService from '@/service/MercadoPagoService';
import { Session, getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const externalReference: string = `MX-${
    Math.floor(Math.random() * (954863 - 54863)) + 54863
  }`;
  const session: Session | null = await getServerSession(authOptions);

  if (session == null || session.user?.email == undefined)
    return NextResponse.json({ code: 401, response: '' });
  const user = await UserRepository.getByEmail(session.user.email);
  if (user == null) return NextResponse.json({ code: 401, response: '' });

  const { email, cpf, firstname, phone, surname } = await request.json();
  const userCart = await CartRepository.getUserCart(session.user.email);

  let total: number = 0;
  userCart.forEach((e) => {
    total += e.product.price * e.quantity;
  });

  const order = await OrderRepository.create(user?.id, total, userCart);
  await InvoiceRepository.create({
    userId: user.id,
    orderId: order.id,
    email,
    cpf,
    firstName: firstname,
    phone,
    surname,
    externalReference,
  });
  const init_point: string = await MercadoPagoService.createPreference(
    externalReference,
    userCart,
  );

  return NextResponse.json({ code: 200, response: init_point });
}
