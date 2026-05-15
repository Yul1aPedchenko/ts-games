import React, { useState } from "react";
import styles from "./TimeCalculator.module.scss";

export const TimeCalculator = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [result, setResult] = useState<string>("0 дн. 0 год. 0 хв. 0 cек.");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(Number(e.target.value));
  };

  const calculateTime = () => {
    const totalSeconds = Number(seconds);

    if (!seconds || totalSeconds < 0) {
      setResult("Введіть коректну кількість секунд");
      return;
    }

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    setResult(`${days} дн. ${hours} год. ${minutes} хв. ${remainingSeconds} сек.`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2>Time Calculator</h2>

        <input type="number" placeholder="Введіть кількість секунд" onChange={handleInputChange} className={styles.input} />

        <button onClick={calculateTime} className={styles.button}>
          Розрахувати
        </button>

        <p className={styles.result}>{result}</p>
      </div>
    </section>
  );
};
