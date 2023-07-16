import OneProduct from '@/components/Home/OneProduct';
import ProductRepository from '@/repository/ProductRepository';
import { Product } from '@prisma/client';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function ProdutoBySlug({ params }: any) {
  const slug = params.slug;
  const product: Product | null = await ProductRepository.getBySlug(slug);
  if (product == null) return redirect('/');
  return (
    <section className="body-font overflow-hidden bg-transparent text-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.imageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              VENDA OFICIAL
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1 my-4">
              {product.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-slate-900"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-slate-900"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-slate-900"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-slate-900"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-slate-900"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Estrelas</span>
              </span>
            </div>
            <p className="leading-relaxed break-words">
              {product.description}
            </p>
            <hr className='my-4'/>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-slate-500">
                R$ {String(product.price).replace(".", ",")}
              </span>
              <Link href={`/produto/${product.slug}/add`} className="flex ml-auto text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded">
                Adicionar ao carrinho
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
