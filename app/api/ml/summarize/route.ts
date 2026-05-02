import { NextResponse } from 'next/server';
import { fetchML } from '@/lib/ml';

export async function POST(req: Request) {
  try {
    const { text, style = 'academic' } = await req.json();
    if (!text) {
      return NextResponse.json({ error: 'Text is required for summarization' }, { status: 400 });
    }

    const results = await fetchML('/api/ml/summarize', { text, style });
    return NextResponse.json(results);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
