import { useState } from "react";
import type { Choice } from "./types";

export const RockPaperScissors = () => {
  const choices: Choice[] = ["Камінь", "Ножиці", "Папір"];

  const [result, setResult] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [userScore, setUserScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  const playGame = (userChoice: Choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomComputerChoice = choices[randomIndex];

    setComputerChoice(randomComputerChoice);

    if (userChoice === randomComputerChoice) {
      setResult("Нічия!");
      return;
    }

    const userWins = (userChoice === "Камінь" && randomComputerChoice === "Ножиці") || (userChoice === "Ножиці" && randomComputerChoice === "Папір") || (userChoice === "Папір" && randomComputerChoice === "Камінь");

    if (userWins) {
      setResult("Ви перемогли!");
      setUserScore((prev) => prev + 1);
    } else {
      setResult("Комп'ютер переміг!");
      setComputerScore((prev) => prev + 1);
    }
    return;
  };

  return (
    <section>
      <div>
        <div>
          <h2>Камінь - ножиці - папір</h2>
          {choices.map((choice) => (
            <button key={choice} onClick={() => playGame(choice)}>
              {choice}
            </button>
          ))}

          <p>Варіант комп’ютера: {computerChoice}</p>
          <p>{result}</p>
        </div>
        <div>
          <h3>Рахунок</h3>
          <p>Ви: {userScore}</p>
          <p>Компʼютер: {computerScore}</p>
        </div>
      </div>
    </section>
  );
};
