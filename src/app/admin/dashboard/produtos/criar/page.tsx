import FormCreateProduct from '@/components/Dashboard/Admin/Produtos/Form';
import Title from '@/components/Title';
import { authOptions } from '@/lib/auth';
import UserRepository from '@/repository/UserRepository';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function CriarProduto() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == null) return redirect('/login');
  const user = await UserRepository.getByEmail(session.user.email);
  if (user?.role != 'admin') return redirect('/');
  return (
    <div>
      <Title>Criar novo produto</Title>
      <FormCreateProduct />
    </div>
  );
}
