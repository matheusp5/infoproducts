import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    code: 200,
    status: 'success',
  });
}
