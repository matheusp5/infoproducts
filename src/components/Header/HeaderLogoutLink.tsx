'use client';
import { signOut } from 'next-auth/react';

const HeaderLogoutLink = () => (
  <button
    className="hover:text-slate-500 transition-all"
    onClick={() => signOut()}
  >
    Sair
  </button>
);
export default HeaderLogoutLink;
