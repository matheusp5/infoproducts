import TableItemDashboardProduct from '@/components/Dashboard/Admin/Produtos/TableItem';

import Title from '@/components/Title';
import ProductRepository from '@/repository/ProductRepository';
import Link from 'next/link';
import UserRepository from '@/repository/UserRepository';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function ProdutosDashboard() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == null) return redirect('/login');
  const user = await UserRepository.getByEmail(session.user.email);
  if (user?.role != 'admin') return redirect('/');
  const products = await ProductRepository.getAll();
  return (
    <div>
      <Title>Todos os produtos</Title>
      <div className="mt-8">
        <Link
          className="p-3 rounded bg-slate-500 hover:bg-slate-600 transition-all"
          href={'/admin/dashboard/produtos/criar'}
        >
          Adicionar um novo produto
        </Link>
      </div>
      <div className="relative overflow-x-auto mt-8">
        <table className="w-full text-sm text-left  dark:text-gray-400">
          <thead className="text-xs  uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Descrição
              </th>
              <th scope="col" className="px-6 py-3">
                Preço
              </th>
              <th scope="col" className="px-6 py-3">
                slug
              </th>
              <th scope="col" className="px-6 py-3">
                URL da imagem
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((e) => (
              <TableItemDashboardProduct
                product={{
                  name: e.name,
                  description: e.description,
                  price: e.price,
                  slug: e.slug,
                  imageUrl: e.imageUrl,
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
