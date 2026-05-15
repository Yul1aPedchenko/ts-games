import React, { useState } from "react";
import { operators } from "./Calculator.types";
import styles from "./Calculator.module.scss";

export const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState<number | string>("Результат");

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "firstNumber") {
      setFirstNumber(value);
    } else {
      setSecondNumber(value);
    }
  };

  const calculate = (operator: string) => {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    if (!firstNumber || !secondNumber) {
      setResult("Введіть числа");
      return;
    }

    switch (operator) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num2 === 0 ? "На 0 ділити не можна" : num1 / num2);
        break;
      default:
        setResult("Помилка");
    }
  };

  return (
    <section className={styles.section}>
      <h2>Калькулятор</h2>

      <div className={styles.card}>
        <input type="number" name="firstNumber" onChange={handleNumber} className={styles.input} placeholder="Введіть число" />

        <div className={styles.buttons}>
          {operators.map((op) => (
            <button key={op} onClick={() => calculate(op)}>
              {op}
            </button>
          ))}
        </div>

        <input type="number" name="secondNumber" onChange={handleNumber} className={styles.input} placeholder="Введіть число" />

        <p className={styles.result}>= {result}</p>
      </div>
    </section>
  );
};
