import OneProduct from '@/components/Home/OneProduct';
import Title from '@/components/Title';
import ProductRepository from '@/repository/ProductRepository';

export default async function SearchProduct(props: any) {
  const productName = props.searchParams.q;

  const products = await ProductRepository.getProductLikeName(productName);
  return (
    <div>
      <Title>Buscar produtos com "{productName}"</Title>
      <div className="flex gap-10 flex-wrap mt-12 mb-20">
        {products.map((e) => {
          return <OneProduct product={e} />;
        })}
      </div>
    </div>
  );
}
