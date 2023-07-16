import { DashboardProps } from '@/app/dashboard/page';
import Table from './Table';
import Link from 'next/link';

export default function MyShoppings({ props }: { props: DashboardProps }) {
  return (
    <div>
      <h1 className="text-4xl mt-12">Minhas compras</h1>
      {props.allInvoices.length == 0 ? (
        <Link href={'/'} className="text-2xl mt-4 text-slate-400">
          Nenhuma compra, que tal comprar algo?
        </Link>
      ) : (
        <Table invoices={props.allInvoices} />
      )}
    </div>
  );
}
