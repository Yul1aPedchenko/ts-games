import { useState } from "react";
export const GuessNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const [userNumber, setUserNumber] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserNumber(Number(value));
  };

  const handleCheckNumber = () => {
    if (!userNumber) {
      setResult("Введіть число");
      return;
    }

    const isGuessed = userNumber === randomNumber;

    setResult(isGuessed ? `Вітаю, ви вгадали число! ${randomNumber}` : `Ви програли, загадане число - ${randomNumber}`);
  };

  return (
    <section>
      <div>
        <h2>Вгадай число, яке загадав комп’ютер</h2>
        <input type="number" placeholder="Введіть число" onChange={handleInputChange} />
        <button onClick={handleCheckNumber}>Перевірити</button>
        <p>{result}</p>
      </div>
    </section>
  );
};
