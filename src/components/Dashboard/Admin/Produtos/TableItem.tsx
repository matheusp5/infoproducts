import Link from 'next/link';

export default function TableItemDashboardProduct({
  product: { name, description, price, slug, imageUrl },
}: {
  product: {
    name: string;
    description: string;
    price: number;
    slug: string;
    imageUrl: string;
  };
}) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{description.substring(0, 35)}...</td>
      <td className="px-6 py-4">R$ {String(price).replace('.', ',')}</td>
      <td className="px-6 py-4">{slug}</td>
      <td className="px-6 py-4">{imageUrl.substring(0, 35)}...</td>
    </tr>
  );
}
