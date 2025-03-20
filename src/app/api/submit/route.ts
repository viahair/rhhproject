import { supabase } from "@/lib/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, phone } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ error: "Missing name or phone" });
    }

    const { data, error } = await supabase.from("appointments").insert([{ name, phone }]);

    if (error) throw error;

    return res.status(200).json({ message: "Data saved", data });
  } catch (err) {
    console.error("Error saving data:", err);
    return res.status(500).json({ error: "Internal Server Error" }); // 確保回傳 JSON
  }
}
