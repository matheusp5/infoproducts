import TableAdminDashboard from '@/components/Dashboard/Admin/TableAdminDashboard';
import Title from '@/components/Title';
import { authOptions } from '@/lib/auth';
import OrderRepository from '@/repository/OrderRepository';
import UserRepository from '@/repository/UserRepository';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function PedidosDashboard() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == null) return redirect('/login');
  const user = await UserRepository.getByEmail(session.user.email);
  if (user?.role != 'admin') return redirect('/');
  const orders = await OrderRepository.getAll();
  let data: string[][] = [];
  orders.forEach((element) => {
    const orderDetails = element.orderDetails.map(
      (e) => e.product?.name + ` (${e.quantity})`,
    );
    data.push([
      element.user.name,
      element.user.email,
      'R$' + String(element.total).replace('.', ','),
      orderDetails.join(', '),
    ]);
  });
  return (
    <div>
      <Title>Todos os pedidos</Title>
      <TableAdminDashboard
        columns={['comprador', 'email', 'total', 'produtos']}
        items={data}
      />
    </div>
  );
}
