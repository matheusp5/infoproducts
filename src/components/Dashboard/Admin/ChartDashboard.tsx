'use client';
import { TopProduct } from '@/repository/ProductRepository';
import Chart from 'react-google-charts';

export default function ChartDashboard({
  products,
}: {
  products: TopProduct[];
}) {
  let data: any = [['Produtos', 'Mais vendidos']];
  {
    products.forEach((e) => data.push([e.name, e.timesPurchased]));
  }
  return (
    <Chart
      className="my-8"
      chartType="PieChart"
      options={{
        is3D: true,
        backgroundColor: '#0F172A',

        legend: {
          textStyle: { color: '#FFF' },
        },
      }}
      data={data}
      width="100%"
      height="400px"
      legendToggle
    />
  );
}
