import { useState } from "react";
import styles from "./FootballGame.module.scss";

export const FootballGame = () => {
  const [ballPosition, setBallPosition] = useState({
    x: 50,
    y: 100,
  });

  const moveBall = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setBallPosition({ x, y });
  };

  return (
    <section className={styles.section}>
      <h2>Футбол</h2>

      <div onClick={moveBall} className={styles.field}>
        <div
          className={styles.ball}
          style={{
            left: ballPosition.x,
            top: ballPosition.y,
          }}
        >
          ⚽
        </div>
      </div>
    </section>
  );
};
