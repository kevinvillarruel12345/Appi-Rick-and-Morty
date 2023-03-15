export const RandomNumber = (min, max) => {
  const quantity = max - min;
  const quantityRandom = Math.random() * quantity;
  return min + Math.round(quantityRandom);
};
