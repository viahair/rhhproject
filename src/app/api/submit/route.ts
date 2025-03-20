// src/app/api/submit/route.ts
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req: Request) {
  const { name, phone } = await req.json();

  // 寫入 Supabase 資料庫
  const { data, error } = await supabase
    .from('customers')
    .insert([{ name, phone }]);

  if (error) {
    return new Response('Error saving data', { status: 500 });
  }

  // 返回資料
  return new Response(JSON.stringify({ data }), { status: 200 });
}
