import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "@/components/layouts/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teech clone",
  description: "Teech clone",
};


export default function RootLayout({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: never;
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}