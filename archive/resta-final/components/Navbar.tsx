"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { BookCopy, PlusCircle, LogOut } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <BookCopy className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-display">ReSta</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          {isLoggedIn && (
            <>
              <Button asChild variant="ghost">
                <Link href="#">My Dashboard</Link>
              </Button>
              <Button asChild>
                <Link href="#"><PlusCircle className="mr-2 h-4 w-4"/> Post an Ad</Link>
              </Button>
            </>
          )}
        </nav>
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground hidden sm:block">student@college.edu</p>
            <Button onClick={() => setIsLoggedIn(false)} variant="outline"><LogOut className="mr-2 h-4 w-4"/>Logout</Button>
          </div>
        ) : (
          <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
        )}
      </div>
    </header>
  );
}
