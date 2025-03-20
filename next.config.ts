import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 忽略在 build 時的 ESLint 錯誤
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
  // 其他配置可以放在這裡
};

export default nextConfig;
