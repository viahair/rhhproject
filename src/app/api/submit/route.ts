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
      return new Response(
        JSON.stringify({
          message: "Failed to insert data into Supabase",
          details: error.message, // 包含錯誤的具體信息
        }),
        { status: 500 }
      );
    }

    console.log('Inserted data:', data);

    // 回傳成功插入的資料
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);

    // 捕獲所有錯誤並回傳錯誤信息
    return new Response(
      JSON.stringify({
        message: "An error occurred while processing your request",
        details: error.message || "Unknown error", // 可能有額外錯誤信息
      }),
      { status: 500 }
    );
  }
}
