import UserRepository from '@/repository/UserRepository';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      password,
      password2,
    }: { name: string; email: string; password: string; password2: string } =
      await request.json();
    if (password == password2) {
      if (name.length > 2 && email.length > 2 && password.length > 2) {
        await UserRepository.insertUser(name, email, password);
        return NextResponse.json({ code: 201, status: 'successfully' });
      }
    }
    return NextResponse.json({ code: 400, status: 'bad-request' });
  } catch {
    return NextResponse.json({ code: 500, status: 'internal-error' });
  }
}
