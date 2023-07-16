import { FaUser, FaCheck, FaMoneyBillWaveAlt } from 'react-icons/fa';
import Block from '../Block';

export default function Blocks({
  users,
  invoices,
  money,
}: {
  users: number;
  invoices: number;
  money: number;
}) {
  return (
    <div className="flex gap-12">
      <Block
        block={{
          title: 'Usuários cadastrados',
          content: String(users),
          icon: <FaUser size={50} />,
        }}
      />
      <Block
        block={{
          title: 'Compras aprovadas',
          content: String(invoices),
          icon: <FaCheck size={50} />,
        }}
      />
      <Block
        block={{
          title: 'Ganhos brutos',
          content: `R$ ${String(money).replace('.', ',')}`,
          icon: <FaMoneyBillWaveAlt size={50} />,
        }}
      />
    </div>
  );
}
