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
  } catch (err) {
    console.error("發生錯誤：", err); // ✅ 加上這行，ESLint 不會報錯
    return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const { error } = await supabase.from("你的資料表").insert([data]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "資料儲存成功！" }, { status: 200 });
  } catch (err) {
    console.error("發生錯誤：", err); // ✅ 加上這行，ESLint 不會報錯
    return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const { error } = await supabase.from("你的資料表").insert([data]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "資料儲存成功！" }, { status: 200 });
  } catch (err) {
    console.error("發生錯誤：", err); // ✅ 加上這行，ESLint 不會報錯
    return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const { error } = await supabase.from("你的資料表").insert([data]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "資料儲存成功！" }, { status: 200 });
  } catch (err) {
    console.error("發生錯誤：", err); // ✅ 加上這行，ESLint 不會報錯
    return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
  }
}

export async function POST(req: Request) {
    try {
      const data = await req.json();
      
      const { error } = await supabase.from("你的資料表").insert([data]);
  
      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
  
      return NextResponse.json({ message: "資料儲存成功！" }, { status: 200 });
    } catch (err: any) {  // 這裡將 err 顯式標註為 any
      console.error("發生錯誤：", err);
      return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
    }
  }
  