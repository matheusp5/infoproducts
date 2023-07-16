import Link from 'next/link';

export default function Sucesso() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl mt-12">
        Sucesso! Sua compra foi aprovada com êxito.
      </h1>
      <Link href="/" className="mt-4 text-2xl text-slate-500">
        Voltar para o Índice
      </Link>
    </div>
  );
}
