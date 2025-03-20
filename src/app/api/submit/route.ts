import { supabase } from "../../lib/supabase";  // 引入 supabase 客戶端

// 定義回應資料的類型
interface ResponseData {
  name: string;
  phone: string;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone } = req.body;

    // 檢查傳入的資料
    if (!name || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 儲存資料到 Supabase
    const { data, error } = await supabase
      .from("appointments") // 假設你有一個 'appointments' 表
      .insert([
        { name, phone }
      ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // 回傳儲存的資料
    return res.status(200).json({ name: data[0].name, phone: data[0].phone });
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
