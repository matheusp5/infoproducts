export default function TableAdminDashboard({
  columns,
  items,
}: {
  columns: string[];
  items: string[][];
}) {
  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-full text-sm text-left  dark:text-gray-400">
        <thead className="text-xs  uppercase  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((e) => {
              return (
                <th scope="col" className="px-6 py-3">
                  {e}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((e) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {e.map((x) => {
                  return <td className="px-6 py-4">{x}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
