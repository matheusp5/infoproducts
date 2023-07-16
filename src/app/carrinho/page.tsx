import Title from '@/components/Title';
import CartProduct from '@/components/Carrinho/CartProduct';
import FinishCartButton from '@/components/Carrinho/CartFinishCartButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import CartRepository from '@/repository/CartRepository';
import Link from 'next/link';

export default async function Cart() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == undefined)
    return redirect('/login');
  const userCart = await CartRepository.getUserCart(session.user.email);
  const total = await CartRepository.getTotal(userCart);
  return (
    <div>
      <Title>Meu carrinho</Title>
      {userCart.length > 0 && (
        <div>
          <h1 className="text-3xl mt-2">
            Total: R$ {total.toString().replace('.', ',')}
          </h1>
          {userCart.length == 0 ? (
            <h1 className="text-2xl mt-4">
              Seu carrinho está vazio! <Link href={'/'}>Faça uma compra</Link>
            </h1>
          ) : (
            <>
              <FinishCartButton>Finalizar compra</FinishCartButton>
              <div className="flex flex-col gap-10 mt-8">
                {userCart.map((e) => (
                  <CartProduct
                    cartProduct={{
                      quantity: e.quantity,
                      productId: e.productId,
                      userId: e.userId,
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
