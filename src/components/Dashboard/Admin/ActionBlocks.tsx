import Link from 'next/link';
import ActionBlock from './ActionBlock';

export default function ActionBlocks() {
  return (
    <div className="mt-12 flex gap-10 mb-8">
      <ActionBlock title="Produtos" href="produtos" />
      <ActionBlock title="Pedidos" href="pedidos" />
      <ActionBlock title="Usuários" href="usuarios" />
      <ActionBlock title="Faturas" href="faturas" />
    </div>
  );
}
