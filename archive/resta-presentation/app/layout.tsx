import type { Metadata } from "next";
import { Inter as FontSans, Space_Grotesk as FontDisplay } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BookCopy } from "lucide-react";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontDisplay = FontDisplay({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = { title: "ReSta: Your Ultimate Resource Station" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontDisplay.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center">
              <Link href="/" className="flex items-center space-x-2 mr-6">
                <BookCopy className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg font-display">ReSta</span>
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6"><div className="container text-center text-sm text-muted-foreground">© {new Date().getFullYear()} ReSta.</div></footer>
        </div>
      </body>
    </html>
  );
}


