import { useEffect, useState } from "react";
import Card from "./Card";
import { useList } from "../useList";
import styles from "./CardList.module.css";

function CardList() {
  const {
    items,
    addItem,
    updateItemTitle,
    toggleItemDone,
    removeItem,
    setNewItemRef,
    focusNewItem,
  } = useList([
    { id: "1", title: "Хлеб", done: false },
    { id: "2", title: "Молоко", done: true },
    { id: "3", title: "Сметана", done: false },
  ]);

  const [lastAddedId, setLastAddedId] = useState(null);

  // Add a new item and set it for autofocus
  const handleAddItem = () => {
    const newId = addItem();
    setLastAddedId(newId);
  };

  // Focus the new item after it's rendered
  useEffect(() => {
    if (lastAddedId) {
      focusNewItem();
      setLastAddedId(null);
    }
  }, [items, lastAddedId, focusNewItem]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список покупок</h1>
      
      <div className={styles.cardList}>
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            onTitleChange={updateItemTitle}
            onToggleDone={toggleItemDone}
            onRemove={removeItem}
            setNewItemRef={setNewItemRef}
            autoFocus={item.id === lastAddedId}
          />
        ))}
      </div>
      
      <button className={styles.button} onClick={handleAddItem}>
        Новый элемент
      </button>
    </div>
  );
}

export default CardList; 