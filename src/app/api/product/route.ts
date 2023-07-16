import ProductRepository from '@/repository/ProductRepository';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data: {
      name: string;
      description: string;
      price: any;
      slug: string;
      imageUrl: string;
    } = await request.json();
    data.price = Number(data.price);
    console.log(data);
    
    await ProductRepository.create(data);

    return NextResponse.json({ code: 200, status: 'success' });
  } catch {
    return NextResponse.json({ code: 500, status: 'internal-error' });
  }
}
