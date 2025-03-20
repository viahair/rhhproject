// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// 從環境變數中獲取 Supabase URL 和 API Key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 使用 Supabase 客戶端建立連接
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
