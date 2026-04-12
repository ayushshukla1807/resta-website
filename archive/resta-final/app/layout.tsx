 import type { Metadata } from "next";
import { Inter as FontSans, Space_Grotesk as FontDisplay } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Image from "next/image";

// Load fonts with custom CSS variable bindings
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontDisplay = FontDisplay({ subsets: ["latin"], variable: "--font-display" });

// ✅ Modern Next.js metadata configuration
export const metadata: Metadata = {
  title: "ReSta: The Engineering Marketplace",
  description: "Buy, sell, and connect through the ReSta engineering marketplace.",
  icons: {
    icon: "/logo.png", // ✅ Use your logo.png in /public as favicon
  },
};

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
          {/* Navbar at the top */}
          <Navbar />

          {/* Main content area */}
          <main className="flex-1">{children}</main>

          {/* Footer section */}
          <footer className="border-t py-8">
            <div className="container text-center text-muted-foreground flex flex-col items-center gap-4">
              <Image
                src="/logo.png"
                alt="ReSta Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <p>© {new Date().getFullYear()} ReSta. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
