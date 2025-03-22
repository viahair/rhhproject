"use client";
import { useState } from "react";
import Calendar from "react-calendar"; // 只匯入 Calendar
import "react-calendar/dist/Calendar.css"; // 引入日曆樣式


import { enUS } from "react-calendar/dist/locale/en-US"; 


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {

  const [value, onChange] = useState<Value>(new Date());


  return (
    <div className="container">
      <h1>預約表單</h1>

      <div>
      <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
