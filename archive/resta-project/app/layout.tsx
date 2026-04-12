import type { Metadata } from "next";
import { Inter as FontSans, Space_Grotesk as FontDisplay } from "next/font/google";
import "./globals.css"; // The most important line!
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontDisplay = FontDisplay({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = { title: "ReSta: The Engineering Marketplace" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6 md:py-8">
            <div className="container text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} ReSta.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
