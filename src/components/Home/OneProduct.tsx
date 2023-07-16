import Link from 'next/link';

export default function OneProduct({
  product,
}: {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    slug: string;
    createdAt: Date;
    updateAt: Date;
    imageUrl: string;
  };
}) {
  return (
    <Link
      className="bg-slate-900 border border-slate-800 p-5 rounded w-1/5 hover:border-slate-500 transition-all"
      href={`/produto/${product.slug}`}
    >
      <h1 className="mb-2 text-xl font-bold text-center">{product.name}</h1>
      <p className="mb-2">{product.description.substring(0, 40)}...</p>
      <img src={product.imageUrl} alt="" />
      <h2 className="text-xl font-semibold text-slate-400 mt-4">
        R$ {product.price.toString().replace('.', ',')}
      </h2>
    </Link>
  );
}
