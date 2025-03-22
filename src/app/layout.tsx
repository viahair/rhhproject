import type { Metadata } from "next";
import Head from "next/head"; // ✅ 使用 Next.js 內建的 Head
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RHH 預約系統", 
  description: "快速預約，方便又簡單！",
  openGraph: {
    title: "RHH 預約系統",
    description: "快速預約，方便又簡單！",
    url: "https://rhhproject.vercel.app/",
    siteName: "RHH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <Head> {/* ✅ 使用 Next.js 的 Head */}
        <meta property="og:title" content="RHH 預約系統" />
        <meta property="og:description" content="快速預約，方便又簡單！" />
        <meta property="og:url" content="https://rhhproject.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
