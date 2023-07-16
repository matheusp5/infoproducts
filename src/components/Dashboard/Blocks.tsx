import { FaCommentDollar, FaListUl, FaShoppingBasket } from 'react-icons/fa';
import Block from './Block';
import { DashboardProps } from '@/app/dashboard/page';

export default async function Blocks({ props }: { props: DashboardProps }) {
  return (
    <div className="flex gap-12">
      <Block
        block={{
          title: 'Total de gastos',
          content: `R$ ${String(props.total).replace('.', ',')}`,
          icon: <FaCommentDollar size={50} />,
        }}
      />
      <Block
        block={{
          title: 'Compras aprovadas',
          content: String(props.approvedInvoices.length),
          icon: <FaListUl size={50} />,
        }}
      />
      <Block
        block={{
          title: 'Última compra realizada em',
          content: props.lastOrderDate,
          icon: <FaShoppingBasket size={50} />,
        }}
      />
    </div>
  );
}
