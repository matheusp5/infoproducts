import ProductRepository from '@/repository/ProductRepository';
import OneProduct from './OneProduct';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export default async function Products() {
  const products = await ProductRepository.getProducts(5);
  return (
    <div className="flex gap-10 flex-wrap justify-center mt-12 mb-20">
      {products.map((e: any) => (
        <OneProduct product={e} />
      ))}
    </div>
  );
}
