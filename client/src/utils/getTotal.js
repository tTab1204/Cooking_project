export const getTotal = cart => {
  let total = 0;

  cart.map(item => (total += item.quantity));

  return total;
};
