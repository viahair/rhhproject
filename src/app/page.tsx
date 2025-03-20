"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [response, setResponse] = useState<any>(null);

  // 新的 handleSubmit 函數
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    });

    const data = await res.json();
    setResponse(data); // 顯示返回的資料
    console.log("Data received:", data); // 顯示接收到的資料
  };

  return (
    <div className="container">
      <h1>預約表單</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">姓名</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">電話</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">提交</button>
      </form>

      {response && (
        <div>
          <h2>收到的資料：</h2>
          <p>姓名: {response.name}</p>
          <p>電話: {response.phone}</p>
        </div>
      )}
    </div>
  );
}
