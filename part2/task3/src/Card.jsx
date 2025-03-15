import { useEffect, useRef } from "react";
import styles from "./Card.module.css";

function Card({ item, onTitleChange, onToggleDone, onRemove, setNewItemRef, autoFocus }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (item.title === "" && inputRef.current === document.activeElement) {
      setNewItemRef(inputRef);
    }
  }, [item.title, setNewItemRef]);

  const handleInputBlur = () => {
    if (item.title.trim() === "") {
      onRemove(item.id);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && document.activeElement === inputRef.current) {
      e.preventDefault();
      onToggleDone(item.id);
    }
  };

  return (
    <div className={styles.card}>
      <label className={styles.container}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => onToggleDone(item.id)}
        />
        <input
          ref={inputRef}
          type="text"
          value={item.title}
          onChange={(e) => onTitleChange(item.id, e.target.value)}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className={item.done ? styles.done : ""}
          placeholder="Введите название"
        />
      </label>
    </div>
  );
}

export default Card; 