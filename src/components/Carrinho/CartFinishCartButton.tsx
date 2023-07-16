'use client';
import { useRouter } from 'next/navigation';

export default function FinishCartButton({ children }: any) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/checkout')}
      className="bg-slate-900 mt-12 w-52 py-3 px-10 text-center rounded cursor-pointer hover:bg-slate-700 transition-all"
    >
      {children}
    </div>
  );
}
