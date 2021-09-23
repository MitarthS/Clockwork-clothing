export const addItemToCart = (items, itemToAdd) => {
  const existingItem = items.find((i) => i.id === itemToAdd.id);
  if (existingItem) {
    return items.map((i) =>
      i.id === itemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};
