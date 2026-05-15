import { useState } from "react";
import { scientists, scientistButtons } from "./Scientists.data";
import type { ActionName } from "./Scientists.types";
import styles from "./Scientists.module.scss";

export const Scientists = () => {
  const [scientistsList, setScientistsList] = useState(scientists);

  const bornIn19Century = () => {
    const filteredScientists = scientists.filter((scientist) => scientist.born >= 1800 && scientist.born < 1900);

    setScientistsList(filteredScientists);
  };

  const findEinstein = () => {
    const einstein = scientists.filter((scientist) => scientist.surname === "Einstein");

    setScientistsList(einstein);
  };

  const sortByAlphabet = () => {
    const sortedScientists = [...scientists].sort((a, b) => a.surname.localeCompare(b.surname));

    setScientistsList(sortedScientists);
  };

  const surnameStartsWithC = () => {
    const filteredScientists = scientists.filter((scientist) => scientist.surname.startsWith("C"));

    setScientistsList(filteredScientists);
  };

  const sortByYearsLived = () => {
    const sortedScientists = [...scientists].sort((a, b) => b.dead - b.born - (a.dead - a.born));

    setScientistsList(sortedScientists);
  };

  const removeNamesWithA = () => {
    const filteredScientists = scientists.filter((scientist) => !scientist.name.startsWith("A"));

    setScientistsList(filteredScientists);
  };

  const youngestScientist = () => {
    const sortedScientists = [...scientists].sort((a, b) => b.born - a.born);

    setScientistsList([sortedScientists[0]]);
  };

  const longestAndShortestLife = () => {
    const sortedScientists = [...scientists].sort((a, b) => b.dead - b.born - (a.dead - a.born));

    setScientistsList([sortedScientists[0], sortedScientists[sortedScientists.length - 1]]);
  };

  const sameFirstLetters = () => {
    const filteredScientists = scientists.filter((scientist) => scientist.name[0] === scientist.surname[0]);

    setScientistsList(filteredScientists);
  };

  const actionsMap: Record<ActionName, () => void> = {
    bornIn19Century,
    findEinstein,
    sortByAlphabet,
    surnameStartsWithC,
    sortByYearsLived,
    removeNamesWithA,
    youngestScientist,
    longestAndShortestLife,
    sameFirstLetters,
  };
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Обери вченого/их</h2>

      <div className={styles.grid}>
        {scientistsList.map((scientist) => (
          <div key={scientist.id} className={styles.card}>
            <span className={styles.name}>{scientist.name}</span>
            <span className={styles.surname}>{scientist.surname}</span>
          </div>
        ))}
      </div>

      <div className={styles.buttons}>
        {scientistButtons.map((button) => (
          <button key={button.text} onClick={actionsMap[button.actionName]} className={styles.button}>
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
};
