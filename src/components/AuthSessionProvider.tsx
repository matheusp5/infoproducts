'use client';

import { SessionProvider } from 'next-auth/react';
const AuthSessionProvider = ({ children }: any) => (
  <SessionProvider>{children}</SessionProvider>
);
export default AuthSessionProvider;
