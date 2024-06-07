import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from '@/app/_components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Usama",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
            <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-negative">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
            <Navbar/>
            <div className="relative flex top-24 left-0 right-0 bottom-28 justify-center mx-auto container w-[100%] h-[100%] rounded-[10px]">
              {children}
            </div>
          </ThemeProvider>
        </body>
    </html>
  );
}
