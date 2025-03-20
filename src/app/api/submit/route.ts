import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, serviceRoleKey);

// Next.js API Route 必須使用 `export async function POST`
export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // 儲存資料到 Supabase
    const { error } = await supabase.from("你的資料表").insert([data]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "資料儲存成功！" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
  }
}
