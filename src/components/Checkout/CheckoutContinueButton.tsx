'use client';
import ProductRepository from '@/repository/ProductRepository';
import { useRouter } from 'next/navigation';

export default function ContinueToPaymentButton() {
  const router = useRouter();
  return (
    <div className="bg-slate-800 w-72 mt-4 py-3 px-10 text-center rounded cursor-pointer hover:bg-slate-700 transition-all">
      Continuar para o pagamento
    </div>
  );
}
