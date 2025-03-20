// src/app/api/submit/route.ts
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req: Request) {
  const { name, phone } = await req.json(); // 獲取前端傳來的姓名和電話

  // 儲存資料到 Supabase
  const { data, error } = await supabase
    .from("customers") // 假設資料表名為 "customers"
    .insert([
      { name, phone }
    ]);

    
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  // 回傳插入的資料
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
