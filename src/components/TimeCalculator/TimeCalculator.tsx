import React, { useState } from "react";
export const TimeCalculator = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [result, setResult] = useState<number | string>("0 днів 00 годин 00 секунд");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(Number(e.target.value));
  };
  return (
    <section>
      <div>
        <input type="number" placeholder="Введіть кількість секунд" onChange={handleInputChange}/>
        <button>Розрахувати</button>
        <p>{result}</p>
      </div>
    </section>
  );
};
