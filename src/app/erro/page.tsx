import Link from 'next/link';

export default function Erro() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl mt-12">
        Ocorreu um erro! Tente novamente mais tarde
      </h1>
      <h2 className="text-3xl mt-2">
        Se o erro persistir, contate o administrador.
      </h2>
      <Link href="/" className="mt-4 text-2xl text-slate-500">
        Voltar para o Índice
      </Link>
    </div>
  );
}
