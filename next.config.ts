import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 忽略在 build 時的 ESLint 錯誤
  },
  // 其他配置可以放在這裡
};

export default nextConfig;
