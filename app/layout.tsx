import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Analytics from "@/components/Analytics/Analytics";
import { Viewport } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const ZenKakuGothicNewFont = Zen_Kaku_Gothic_New({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-ZenKakuGothicNew",
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
        <body className={ZenKakuGothicNewFont.className}>
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
