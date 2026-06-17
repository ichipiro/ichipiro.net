import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Analytics from "@/components/Analytics/Analytics";
import { Viewport } from "next";
import { Inter, Figtree } from "next/font/google";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-Inter",
  display: 'swap'
});

const FigtreeFont = Figtree({
  subsets: ["latin"],
  variable: "--font-Figtree",
  display: 'swap'
});

export const viewport: Viewport = {
  width: "device-width",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"
        />
      </head>
        <body className={`${FigtreeFont.variable} ${InterFont.variable}`}>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <Header />
            {children}
          <Footer />
        </body>
    </html>
  );
}
