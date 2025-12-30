"use client";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Analytics from "@/components/Analytics/Analytics";
import { createTheme, ThemeProvider } from "@mui/material";
import { Viewport } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const ZenKakuGothicNewFont = Zen_Kaku_Gothic_New({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-ZenKakuGothicNew",
});

export const viewport: Viewport = {
  width: "device-width",
};

const theme = createTheme({
  typography: {
    fontFamily: ["__Zen_Kaku_Gothic_New_246353", "Roboto", "sans-serif"].join(
      ","
    ),
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"
        />
      </head>
      <ThemeProvider theme={theme}>
        <body className={ZenKakuGothicNewFont.className}>
          <Analytics />
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
