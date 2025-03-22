"use client";
import { useState } from "react";
import Calendar from "react-calendar"; // 引入 react-calendar
import "react-calendar/dist/Calendar.css"; // 引入日曆樣式

// 定義回應資料的類型
interface ResponseData {
  name: string;
  phone: string;
  birthday: string;
  appointmentDateTime: string;
  service: string;
}

// 定義 Value 類型，這樣可以處理日期或日期範圍
type Value = Date | Date[] | null;

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [appointmentDateTime, setAppointmentDateTime] = useState("");
  const [service, setService] = useState("");
  const [response, setResponse] = useState<ResponseData | null>(null);

  // 使用 Value 類型來儲存選擇的日期
  const [selectedDate, setSelectedDate] = useState<Value>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Sending data to API:", { name, phone, birthday, appointmentDateTime, service });

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, birthday, appointmentDateTime, service }),
    });

    const data: ResponseData = await res.json();
    setResponse(data);
  };

  // 處理日曆日期變更
  const handleDateChange = (value: Value) => {
    if (value) {
      setSelectedDate(value);

      // 如果選擇的是單一日期，則更新預約時間
      if (value instanceof Date) {
        setAppointmentDateTime(value.toISOString()); // 更新為選中的日期
      } else if (Array.isArray(value) && value[0]) {
        // 如果選擇的是日期範圍，更新為範圍的第一個日期
        setAppointmentDateTime(value[0].toISOString());
      }
    }
  };

  return (
    <div className="container">
      <h1>預約表單</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phone">電話</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="birthday">生日</label>
          <input type="date" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="appointmentDateTime">預約日期時間</label>
          <input
            type="datetime-local"
            id="appointmentDateTime"
            value={appointmentDateTime}
            onChange={(e) => setAppointmentDateTime(e.target.value)}
            required
          />
        </div>
        
        {/* 顯示日曆 */}
        <div>
          <h3>選擇預約日期</h3>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>

        <div>
          <label htmlFor="service">服務項目</label>
          <input type="text" id="service" value={service} onChange={(e) => setService(e.target.value)} required />
        </div>
        <button type="submit">提交</button>
      </form>

      {response && (
        <div>
          <h2>收到的資料：</h2>
          <p>姓名: {response.name}</p>
          <p>電話: {response.phone}</p>
          <p>生日: {response.birthday}</p>
          <p>預約日期時間: {response.appointmentDateTime}</p>
          <p>服務項目: {response.service}</p>
        </div>
      )}
    </div>
  );
}
