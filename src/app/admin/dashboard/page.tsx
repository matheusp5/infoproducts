import ActionBlocks from '@/components/Dashboard/Admin/ActionBlocks';
import Blocks from '@/components/Dashboard/Admin/Blocks';
import ChartDashboard from '@/components/Dashboard/Admin/ChartDashboard';
import Title from '@/components/Title';
import { authOptions } from '@/lib/auth';
import InvoiceRepository from '@/repository/InvoiceRepository';
import ProductRepository from '@/repository/ProductRepository';
import UserRepository from '@/repository/UserRepository';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Chart } from 'react-google-charts';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == null) return redirect('/login');
  const user = await UserRepository.getByEmail(session.user.email);
  if (user?.role != 'admin') return redirect('/');
  const products = await ProductRepository.getTopProductsLastPeriod();

  return (
    <div>
      <Title>Olá, administrador {session.user.name}</Title>
      <Blocks
        users={await UserRepository.countUsers()}
        invoices={await InvoiceRepository.countApprovedInvoices()}
        money={await InvoiceRepository.getAllMoneyOfApprovedInvoices()}
      />
      <ActionBlocks />
      <Title>5 produtos mais vendidos (mensal)</Title>
      <ChartDashboard products={products} />
    </div>
  );
}
