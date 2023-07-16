import Blocks from '@/components/Dashboard/Blocks';
import MyShoppings from '@/components/Dashboard/MyShoppings';
import Title from '@/components/Title';
import { authOptions } from '@/lib/auth';
import InvoiceRepository from '@/repository/InvoiceRepository';
import OrderRepository from '@/repository/OrderRepository';
import { Invoice } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { format } from 'date-fns';

export type DashboardProps = {
  total: number;
  approvedInvoices: Invoice[];
  allInvoices: Invoice[];
  lastOrderDate: string
};

export default async function ClientDashboard() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == null) return redirect('/login');

  let total = 0;
  const allInvoices = await InvoiceRepository.getByEmail(session.user?.email);
  const approvedInvoices = allInvoices.filter(
    (e: Invoice) => e.status == 'pending',
  );
  approvedInvoices.forEach((e) => (total += e.order.total));
  const lOrderDate = await OrderRepository.getLastOrderDate(session.user.email) || 0
  const lastOrderDate = format(lOrderDate, "dd/MM/yyyy HH:mm")

  return (
    <div>
      <Title>Olá, {session?.user?.name}</Title>
      <Blocks props={{ total, approvedInvoices, allInvoices, lastOrderDate}} />
      <MyShoppings props={{ total, approvedInvoices, allInvoices, lastOrderDate }} />
    </div>
  );
}
