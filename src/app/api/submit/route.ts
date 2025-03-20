import { supabase } from "../../../lib/supabase";

export async function POST(request: Request) {
  try {
    // 從前端接收資料
    const { name, phone } = await request.json();
    
    console.log('Received data:', { name, phone });

    // 插入資料到 Supabase 資料庫
    const { data, error } = await supabase
      .from('your_table_name') // 替換為你的資料表名稱
      .insert([{ name, phone }]);

    // 檢查是否有錯誤
    if (error) {
      console.error('Supabase insert error:', error); // 打印詳細錯誤資訊
      return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }

    console.log('Inserted data:', data);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new Response(JSON.stringify({ message: "Error occurred" }), { status: 500 });
  }
}
