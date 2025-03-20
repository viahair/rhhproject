import { supabase } from "../../../lib/supabase";

export async function POST(request: Request) {
  try {
    // 從前端接收資料
    const { name, phone } = await request.json();
    console.log('Received data:', { name, phone });

    // 插入資料到 Supabase 資料庫
    const { data, error } = await supabase
      .from('customers') // 確保這裡是正確的資料表名稱
      .insert([{ name, phone }]);

    // 檢查是否有錯誤
    if (error) {
      console.error('Supabase insert error:', error); // 打印錯誤信息
      return new Response(
        JSON.stringify({
          message: "Failed to insert data into Supabase",
          details: (error as { message: string }).message || 'No error message provided', // 顯示錯誤具體信息
        }),
        { status: 500 }
      );
    }

    // 查詢剛插入的資料
    const { data: insertedData, error: queryError } = await supabase
      .from('customers')
      .select('*')
      .eq('phone', phone)  // 使用phone作為條件篩選
      .single();

    if (queryError) {
      console.error('Supabase query error:', queryError);
      return new Response(
        JSON.stringify({
          message: "Failed to retrieve inserted data",
          details: queryError.message || 'No error message provided',
        }),
        { status: 500 }
      );
    }

    console.log('Inserted data:', insertedData);

    // 回傳成功插入的資料
    return new Response(JSON.stringify(insertedData), { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);

    // 捕獲所有錯誤並回傳錯誤信息
    return new Response(
      JSON.stringify({
        message: "An error occurred while processing your request",
        details: (error as { message: string }).message || "Unknown error", // 顯示錯誤訊息
      }),
      { status: 500 }
    );
  }
}
