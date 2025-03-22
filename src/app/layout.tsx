import type { Metadata } from "next";
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
  title: "RHH 預約系統", // 修改標題
  description: "快速預約，方便又簡單！", // 修改描述
  openGraph: {
    title: "RHH 預約系統", // LINE 預覽的標題
    description: "快速預約，方便又簡單！", // LINE 預覽的描述
    url: "https://rhhproject.vercel.app/", // 你的網站 URL
    siteName: "RHH", // 站點名稱
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 這裡的 meta 讓 LINE 可以正確讀取 */}
        <meta property="og:title" content="RHH 預約系統" />
        <meta property="og:description" content="快速預約，方便又簡單！" />
        <meta property="og:url" content="https://rhhproject.vercel.app/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
