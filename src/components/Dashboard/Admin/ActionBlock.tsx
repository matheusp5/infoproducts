import Link from 'next/link';

export default function ActionBlock({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={`/admin/dashboard/${href}`}
      className="w-1/4 text-center bg-slate-600 rounded py-3"
    >
      {title}
    </Link>
  );
}
