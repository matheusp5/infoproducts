import { authOptions } from '@/lib/auth';
import CartRepository from '@/repository/CartRepository';
import ProductRepository from '@/repository/ProductRepository';
import { Product } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function DeleteProduct({ params }: any) {
  const session = await getServerSession(authOptions);
  if (session == undefined || session.user?.email == undefined)
    return redirect('/login');

  const slug = params.slug;
  const product: Product | null = await ProductRepository.getBySlug(slug);
  if (product == null) return redirect('/');

  await CartRepository.removeQuantity(session.user.email, product.id);
  return redirect('/');
}
