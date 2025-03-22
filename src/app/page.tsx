"use client";
import { useState } from "react";
import Calendar from "react-calendar"; // 只匯入 Calendar
import "react-calendar/dist/Calendar.css"; // 引入日曆樣式

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | Date[] | null>(null); // 使用 Date 或 Date[] 類型

  // 處理日曆日期變更
  const handleDateChange = (value: Date | Date[]) => {
    setSelectedDate(value); // 更新選擇的日期或範圍
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
    </div>
  );
}
