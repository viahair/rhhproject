import { supabase } from "../../../lib/supabase"; // 確保路徑正確

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();
    
    // 將資料插入到 Supabase 資料庫中
    const { data, error } = await supabase
      .from('your_table_name')  // 替換為你的資料表名稱
      .insert([
        { name, phone }
      ]);

    if (error) {
      return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error occurred" }), { status: 500 });
  }
}
