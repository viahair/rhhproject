import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // 這是 React 嚴格模式的設置，視需要開啟或關閉
  eslint: {
    ignoreDuringBuilds: true, // 忽略 build 過程中的 ESLint 錯誤
  },
  // 其他配置選項可以加在這裡
};

export default nextConfig;
