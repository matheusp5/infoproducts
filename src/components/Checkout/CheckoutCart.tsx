import { redirect } from 'next/navigation';
import CartItem from './CheckoutCartItem';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import CartRepository from '@/repository/CartRepository';

export default async function Cart() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.email == undefined)
    return redirect('/login');
  const userCart = await CartRepository.getUserCart(session.user.email);
  const total = CartRepository.getTotal(userCart);
  if (userCart.length == 0) return redirect('/');
  return (
    <div className="bg-slate-900 rounded">
      <div className="flex flex-col mt-10 p-3 gap-2">
        {userCart.map((e) => (
          <CartItem
            cartProduct={{
              quantity: e.quantity,
              productId: e.productId,
              userId: e.userId,
            }}
          />
        ))}
        <h1 className="text-3xl mt-2">
          Total: R$ {total.toString().replace('.', ',')}
        </h1>
      </div>
    </div>
  );
}
