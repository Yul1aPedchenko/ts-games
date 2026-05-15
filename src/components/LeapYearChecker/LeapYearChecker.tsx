import { useState } from "react";
import styles from "./LeapYearChecker.module.scss";

export const LeapYearChecker = () => {
  const [year, setYear] = useState(0);
  const [result, setResult] = useState("");

  const handleCheck = () => {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    setResult(isLeap ? "Високосний рік!" : "Не високосний рік!");
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2>Leap Year Checker</h2>

        <input type="number" placeholder="Введіть рік" onChange={(e) => setYear(Number(e.target.value))} className={styles.input} />

        <button onClick={handleCheck} className={styles.button}>
          Перевірити
        </button>

        <p>{result}</p>
      </div>
    </section>
  );
};
