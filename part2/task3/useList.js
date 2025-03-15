import { useState, useRef } from "react";

export function useList(initialItems = []) {
  const [items, setItems] = useState(initialItems);
  const newItemRef = useRef(null);

  const addItem = () => {
    const newItem = {
      id: Date.now().toString(),
      title: "",
      done: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    return newItem.id;
  };

  const updateItemTitle = (id, title) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, title } : item
      )
    );
  };

  const toggleItemDone = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const setNewItemRef = (ref) => {
    newItemRef.current = ref;
  };

  const focusNewItem = () => {
    if (newItemRef.current) {
      newItemRef.current.focus();
    }
  };

  return {
    items,
    addItem,
    updateItemTitle,
    toggleItemDone,
    removeItem,
    setNewItemRef,
    focusNewItem,
  };
} 