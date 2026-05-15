import { useState } from "react";
import styles from "./BiggestNumber.module.scss";

export const BiggestNumber = () => {
  const [numbers, setNumbers] = useState({
    first: "",
    second: "",
    third: "",
  });

  const [result, setResult] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNumbers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const findMaxNumber = () => {
    const max = Math.max(Number(numbers.first), Number(numbers.second), Number(numbers.third));

    setResult(`Найбільше число: ${max}`);
  };

  return (
    <section className={styles.section}>
      <h2>Введіть 3 числа</h2>

      <div className={styles.inputs}>
        <input name="first" onChange={handleInputChange} placeholder="Введіть число" />
        <input name="second" onChange={handleInputChange} placeholder="Введіть число" />
        <input name="third" onChange={handleInputChange} placeholder="Введіть число" />
      </div>

      <button onClick={findMaxNumber} className={styles.button}>
        Знайти найбільше
      </button>

      <p className={styles.result}>{result}</p>
    </section>
  );
};
