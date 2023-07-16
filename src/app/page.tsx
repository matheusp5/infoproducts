import Products from '@/components/Home/Products';
import Title from '@/components/Title';

export default function Home() {
  return (
    <div>
      <img
        className="my-20 w-2/4 m-auto"
        src="https://assets-blog.pagseguro.uol.com.br/wp-content/2021/03/vantagens-de-ter-loja-online.jpg"
      />

      <Title>Novidades na nossa loja</Title>
      <form action="/produto" method="get">
        <input
          type="text"
          name="q"
          id="query"
          placeholder="Procure por produtos"
          className="bg-transparent mt-6 py-2 px-4 border rounded border-slate-500 outline-none"
        />
        <button type="submit" className="bg-slate-700 py-2 px-4 rounded ml-4">
          Buscar
        </button>
      </form>
      <Products />
    </div>
  );
}
