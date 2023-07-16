import TableAdminDashboard from '@/components/Dashboard/Admin/TableAdminDashboard';
import Title from '@/components/Title';
import { authOptions } from '@/lib/auth';
import UserRepository from '@/repository/UserRepository';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function UsuariosDashboard() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == null) return redirect('/login');
  const user = await UserRepository.getByEmail(session.user.email);
  if (user?.role != 'admin') return redirect('/');
  const users = await UserRepository.getAll();
  let data: string[][] = [];
  users.forEach((element) => {
    data.push([
      element.name,
      element.email,
      String(element.Order.length),
      element.role,
    ]);
  });
  return (
    <div>
      <Title>Todos os usuários</Title>
      <TableAdminDashboard
        columns={['nome', 'email', 'quantidade de pedidos', 'cargo']}
        items={data}
      />
    </div>
  );
}
