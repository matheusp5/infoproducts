import TableAdminDashboard from '@/components/Dashboard/Admin/TableAdminDashboard';
import Title from '@/components/Title';
import { authOptions } from '@/lib/auth';
import InvoiceRepository from '@/repository/InvoiceRepository';
import UserRepository from '@/repository/UserRepository';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function FaturasDashboard() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == null) return redirect('/login');
  const user = await UserRepository.getByEmail(session.user.email);
  if (user?.role != 'admin') return redirect('/');
  const invoices = await InvoiceRepository.getAll();
  let data: string[][] = [];
  invoices.forEach((element) => {
    data.push([
      element.firstName + ' ' + element.surname + ' (' + element.email + ')',
      element.cpf,
      element.phone,
      element.status || 'Sem pagamento',
      element.ipv4 || 'Sem pagamento',
      element.paymentMethod || 'Sem pagamento',
    ]);
  });
  return (
    <div>
      <Title>Todas as faturas</Title>
      <TableAdminDashboard
        columns={[
          'comprador',
          'cpf',
          'telefone',
          'status',
          'ipv4',
          'método de pagamento',
        ]}
        items={data}
      />
    </div>
  );
}
