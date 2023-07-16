import ProductRepository from '@/repository/ProductRepository';
import HeaderLink from './HeaderLink';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import HeaderLogoutLink from './HeaderLogoutLink';
import UserRepository from '@/repository/UserRepository';

export default async function Header() {
  const session = await getServerSession(authOptions);
  let links = [];

  if (!session || !session.user?.email) {
    links.push(
      <HeaderLink to="/login" title="Entrar" />,
      <HeaderLink to="/register" title="Cadastrar-se" />,
    );
  } else {
    const user = await UserRepository.getByEmail(session.user?.email);
    if (user?.role == 'user') {
      links.push(
        <HeaderLink to="/dashboard" title="Dashboard" />,
        <HeaderLink to="/carrinho" title="Carrinho" />,
        <HeaderLogoutLink />,
      );
    } else if (user?.role == 'admin') {
      links.push(
        <HeaderLink to="/admin/dashboard" title="Painel administrativo" />,
        <HeaderLogoutLink />,
      );
    }
  }
  // <HeaderLink to="/suporte" title="Suporte" />

  return (
    <header className="p-8 border-b border-slate-600">
      <div className="flex items-center gap-12">
        <h1 className="text-xl">YeShop</h1>
        <div className="flex gap-4">
          <HeaderLink to="/" title="Home" />
          {links.map((e) => e)}
        </div>
      </div>
    </header>
  );
}
