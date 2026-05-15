import { useState } from "react";
import type { Choice } from "./types";
import styles from "./RockPaperScissors.module.scss";

export const RockPaperScissors = () => {
  const choices: Choice[] = ["Камінь", "Ножиці", "Папір"];

  const [result, setResult] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (userChoice: Choice) => {
    const random = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(random);

    if (userChoice === random) {
      setResult("Нічия!");
      return;
    }

    const userWins = (userChoice === "Камінь" && random === "Ножиці") || (userChoice === "Ножиці" && random === "Папір") || (userChoice === "Папір" && random === "Камінь");

    if (userWins) {
      setResult("Ви перемогли!");
      setUserScore((p) => p + 1);
    } else {
      setResult("Комп'ютер переміг!");
      setComputerScore((p) => p + 1);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2>Камінь - ножиці - папір</h2>

        <div className={styles.buttons}>
          {choices.map((choice) => (
            <button key={choice} onClick={() => playGame(choice)}>
              {choice}
            </button>
          ))}
        </div>

        <p>Комп’ютер: {computerChoice}</p>
        <p className={styles.result}>{result}</p>

        <div className={styles.score}>
          <p>Ви: {userScore}</p>
          <p>Компʼютер: {computerScore}</p>
        </div>
      </div>
    </section>
  );
};
