import { useState } from "react";
import styles from "./TextSlider.module.scss";

type TextSliderProps = {
  items: string[];
  title?: string;
};

export const TextSlider = ({ items, title }: TextSliderProps) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const random = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setIndex(randomIndex);
  };

  if (!items.length) return <p>Немає даних</p>;

  return (
    <div className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <div className={styles.content}>{items[index]}</div>

      <div className={styles.buttons}>
        <button onClick={prev}>Prev</button>
        <button onClick={random}> Random</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};
