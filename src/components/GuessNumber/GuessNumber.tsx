import { useState } from "react";
import styles from "./GuessNumber.module.scss";

export const GuessNumber = () => {
  const random = Math.floor(Math.random() * 10) + 1;

  const [userNumber, setUserNumber] = useState(0);
  const [result, setResult] = useState("");

  const check = () => {
    if (!userNumber) {
      setResult("Введіть число");
      return;
    }

    setResult(userNumber === random ? `Вгадали! ${random}` : `Програли! ${random}`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2>Guess Number</h2>

        <input type="number" onChange={(e) => setUserNumber(Number(e.target.value))} className={styles.input} />

        <button onClick={check} className={styles.button}>
          Перевірити
        </button>

        <p>{result}</p>
      </div>
    </section>
  );
};
