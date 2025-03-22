"use client";
import { useState } from "react";
import Calendar from "react-calendar"; // 只匯入 Calendar

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {

  const [value, onChange] = useState<Value>(new Date());


  return (
    <div className="container">
      <h1>預約表單</h1>

      <div>
        <h3>選擇日期</h3>
      <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
