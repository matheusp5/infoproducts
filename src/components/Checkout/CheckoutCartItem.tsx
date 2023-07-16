import ProductRepository from '@/repository/ProductRepository';
import { redirect } from 'next/navigation';

export default async function CartItem({
  cartProduct,
}: {
  cartProduct: {
    userId: string;
    quantity: number;
    productId: string;
  };
}) {
  const product = await ProductRepository.getById(cartProduct.productId);
  if (product == null) return redirect('/');
  const total = cartProduct.quantity * product?.price;
  return (
    <div className="bg-slate-900 flex p-3 items-center justify-between rounded">
      <div className="flex items-center gap-8">
        <img className="w-40" src={product?.imageUrl} />
        <div>
          <h1 className="text-xl">{product?.name}</h1>
          <p>
            Quantidade: {cartProduct.quantity}. R$ {total} (R$ {product.price}{' '}
            por quantidade).
          </p>
        </div>
      </div>
    </div>
  );
}
