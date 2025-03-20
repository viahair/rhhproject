import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, serviceRoleKey);

export async function POST(req: Request) {
    try {
      const data = await req.json();
      
      const { error } = await supabase.from("你的資料表").insert([data]);
  
      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
  
      return NextResponse.json({ message: "資料儲存成功！" }, { status: 200 });
    } catch {
      console.error("發生錯誤");
      return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
    }
  }
  