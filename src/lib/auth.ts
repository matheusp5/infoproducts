import UserRepository from '@/repository/UserRepository';
import AuthService from '@/service/AuthService';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(data: any) {
        const authed: boolean = await AuthService.authUser(
          data.email,
          data.password,
        );
        if (authed) {
          return await UserRepository.getByEmail(data.email);
        }
        return null;
      },
    }),
  ],
};
