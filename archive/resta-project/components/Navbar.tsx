import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import AuthButton from "./AuthButton";
import { BookCopy, PlusCircle } from "lucide-react";

export default async function Navbar() {
  const supabase = createClient(cookies());
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <BookCopy className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-display">ReSta</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          {user && (
            <>
              <Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-foreground">Dashboard</Link>
            </>
          )}
        </nav>
        <AuthButton user={user} />
      </div>
    </header>
  );
}