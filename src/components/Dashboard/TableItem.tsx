type TableItemProps = {
  products: string;
  total: number;
  paymentMethod: string;
  status: string;
  email: string;
  cpf: string;
};

export default function TableItem({
  tableItemProps: { products, total, paymentMethod, status, cpf, email },
}: {
  tableItemProps: TableItemProps;
}) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {products}
      </th>
      <td className="px-6 py-4">R$ {total.toString().replace('.', ',')}</td>
      <td className="px-6 py-4">{paymentMethod}</td>
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{cpf}</td>
    </tr>
  );
}
