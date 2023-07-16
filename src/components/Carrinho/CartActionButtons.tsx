'use client';

import { useRouter } from 'next/navigation';

export default function ActionButtons({ slug }: { slug: string }) {
  const router = useRouter();
  return (
    <div>
      <div className="mr-20 flex gap-12">
        <a
          className="cursor-pointer"
          onClick={() => router.push(`/produto/${slug}/remove`)}
        >
          remover
        </a>
        <a
          className="cursor-pointer"
          onClick={() => router.push(`/produto/${slug}/add`)}
        >
          adicionar unidade
        </a>
        <a
          className="cursor-pointer"
          onClick={() => router.push(`/produto/${slug}/remove/quantity`)}
        >
          remover unidade
        </a>
      </div>
    </div>
  );
}
