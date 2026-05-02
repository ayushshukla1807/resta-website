import { NextResponse } from 'next/server';
import { fetchML } from '@/lib/ml';

export async function POST(req: Request) {
  try {
    const { query, top_k = 10 } = await req.json();
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const results = await fetchML('/api/ml/search', { query, top_k });
    return NextResponse.json(results);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
