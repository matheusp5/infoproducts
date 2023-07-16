import { Invoice } from '@prisma/client';
import TableItem from './TableItem';
import OrderRepository from '@/repository/OrderRepository';
import ProductRepository from '@/repository/ProductRepository';

export default function Table({ invoices }: { invoices: Invoice[] }) {
  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-full text-sm text-left  dark:text-gray-400">
        <thead className="text-xs  uppercase  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Produto(s)
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Método de pagamento
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              E-mail
            </th>
            <th scope="col" className="px-6 py-3">
              CPF
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(async (e) => {
            const order = await OrderRepository.getById(e.orderId);
            if (!order || !e.paymentMethod || !e.status) return;
            let names: string[] = [];

            await Promise.all(
              order.orderDetails.map(async (e) => {
                const product = await ProductRepository.getById(e.productId);
                if (product) {
                  names.push(product.name);
                }
              }),
            );

            return (
              <TableItem
                tableItemProps={{
                  products: names.join(', '),
                  total: order.total,
                  paymentMethod:
                    e.paymentMethod[0].toUpperCase() +
                    e.paymentMethod.substring(1),
                  status: e.status[0].toUpperCase() + e.status.substring(1),
                  cpf: e.cpf,
                  email: e.email,
                }}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
