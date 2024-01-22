
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';


import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome back A",
  description: "it's been a while",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <AppRouterCacheProvider>
        <Header />
          {children}
          <Footer />
          </AppRouterCacheProvider>
        </body>
    </html>
  );
}
