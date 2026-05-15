import { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState<string | null>(null);

  const handleRegister = () => {
    if (!name.trim()) return;

    setUserName(name);
    setName("");
    setIsOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.logo}>My App</h2>

        <div>
          {userName ? (
            <p className={styles.hello}>Привіт, {userName} 👋</p>
          ) : (
            <button className={styles.button} onClick={() => setIsOpen(true)}>
              Зареєструватись
            </button>
          )}
        </div>
      </header>

      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h3>Реєстрація</h3>

            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Введіть ім’я" className={styles.input} />

            <div className={styles.actions}>
              <button onClick={() => setIsOpen(false)}>Скасувати</button>

              <button onClick={handleRegister}>Підтвердити</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
