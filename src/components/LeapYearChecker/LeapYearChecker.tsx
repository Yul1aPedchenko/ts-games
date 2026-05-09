import { useState } from "react";
import React from "react";

export const LeapYearChecker = () => {
  const [year, setYear] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYear(Number(value));
  };

  const handleCheckYear = () => {
    const numYear = Number(year);

    const isLeap = (numYear % 4 === 0 && numYear % 100 !== 0) || numYear % 400 === 0;

    setResult(isLeap ? "Ви народилися у високосний рік!" : "Ви НЕ народилися у високосний рік!");
  };

  return (
    <section>
      <div>
        <h2>Перевір в який рік ти народився</h2>
        <input type="number" placeholder="Введіть рік народження" value={year} onChange={handleInputChange} />

        <button onClick={handleCheckYear}>Перевірити</button>
        <p>{result}</p>
      </div>
    </section>
  );
};
