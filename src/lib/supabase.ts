import { createClient } from "@supabase/supabase-js";

// 使用從環境變數中取得的 Supabase URL 和金鑰
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);
