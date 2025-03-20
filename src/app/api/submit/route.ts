import { createClient } from "@supabase/supabase-js";
import { NextResponse } from 'next/server';  // 確保這行存在

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);
