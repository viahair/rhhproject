export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, phone } = req.body;
  
      // 你可以在這裡處理資料，例如儲存到資料庫，這裡我們僅回傳資料。
      res.status(200).json({ name, phone });
    } else {
      // 只允許 POST 請求
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  