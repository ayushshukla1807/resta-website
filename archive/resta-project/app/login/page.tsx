import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  if (code) {
    const supabase = createClient(cookies())
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) { return NextResponse.redirect(`${origin}/dashboard`) }
  }
  return NextResponse.redirect(`${origin}/login`)
}