"use client";
import { useState } from "react";
import Calendar from "react-calendar"; // 引入 react-calendar
import "react-calendar/dist/Calendar.css"; // 引入日曆樣式

// 定義回應資料的類型
interface ResponseData {
  name: string;
  phone: string;
}

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [response, setResponse] = useState<ResponseData | null>(null); // 使用具體的 ResponseData 類型
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 儲存選擇的日期

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 在發送資料前輸出 log，檢查資料
    console.log('Sending data to API:', { name, phone });

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    });

    const data: ResponseData = await res.json(); // 使用 ResponseData 類型
    setResponse(data); // 顯示返回的資料
  };

  // 處理日曆日期變更
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="container">
      <h1>預約表單</h1>

      {/* 月曆 */}
      <div>
        <h3>選擇日期</h3>
        <Calendar
          onChange={handleDateChange} // 當選擇日期時更新
          value={selectedDate} // 顯示當前選擇的日期
        />
      </div>

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
