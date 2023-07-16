import Link from 'next/link';

const HeaderLink = ({ to, title }: { to: string; title: string }) => (
  <Link className="hover:text-slate-500 transition-all" href={to}>
    {title}
  </Link>
);
export default HeaderLink;
