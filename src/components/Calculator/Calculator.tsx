import React, { useState } from "react";
import { operators } from "./Calculator.types";

export const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [result, setResult] = useState<number | string>('Результат');

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberInd = e.target.name;
    const value = e.target.value;
    if (!value) {
      setResult("Введіть число");
      return;
    }

    if (numberInd === "firstNumber") {
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
        if (num2 === 0) {
          setResult("На 0 ділити не можна");
          return;
        }

        setResult(num1 / num2);
        break;
      default:
        setResult("Щось пішло не так, перевірте введені вами значення");
    }
  };

  return (
    <section>
      <h2>Калькулятор</h2>
      <div>
        <input type="number" name="firstNumber" placeholder="Введіть число" onChange={handleNumber} />
        <div>
          {operators.map((operator) => (
            <button key={operator} onClick={() => calculate(operator)}>{operator}</button>
          ))}
        </div>
        <input type="number" name="secondNumber"  placeholder="Введіть число" onChange={handleNumber} />
        <div>
          <p>=</p>
        </div>
        <div>
          <p>{result}</p>
        </div>
      </div>
    </section>
  );
};
