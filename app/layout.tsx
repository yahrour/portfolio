import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import Image from "next/image";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youssef Ahrour",
  description: "Portfolio presenting my work, background.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.className} bg-primary text-foreground relative antialiased transition-all duration-300`}
      >
        <div className="absolute top-0 right-0 block h-[150px] w-[150px] max-md:hidden">
          <Image
            src="/spiderweb.svg"
            alt="spider"
            width={150}
            height={150}
            className="fixed rotate-[1.2deg]"
            priority
          />
          <div className="spiderLine"></div>
          <Image
            src="/spider.svg"
            alt="spider"
            width={32}
            height={32}
            priority
            className="spider"
          />
        </div>

        <ThemeProvider attribute="class" defaultTheme="light">
          <header className="mx-auto w-full max-w-3xl space-y-10 p-16 pb-0 max-md:p-8 max-sm:p-4">
            <h1 className="text-center text-4xl font-bold tracking-tighter">
              Youssef Ahrour
            </h1>
            <Navigation />
          </header>
          <main className="mx-auto flex h-fit w-full max-w-3xl flex-col items-center gap-16 p-16 max-md:p-10 max-sm:p-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
