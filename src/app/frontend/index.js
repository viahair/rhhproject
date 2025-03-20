import { useState } from 'react';

export default function Home() {
  // 記錄表單的狀態
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 防止頁面重新載入

    // 傳送表單資料到後端 API
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone }),
    });

    // 顯示回應結果
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <h1>顧客預約表單</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>姓名：</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>電話：</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">提交</button>
      </form>

      {response && (
        <div>
          <h2>提交結果：</h2>
          <p>姓名：{response.name}</p>
          <p>電話：{response.phone}</p>
        </div>
      )}
    </div>
  );
}
