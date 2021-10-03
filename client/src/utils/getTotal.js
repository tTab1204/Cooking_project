export const getTotal = cart => {
  let total = 0;
  cart && cart.map(item => (total += item.quantity));

  return total;
};

export const getTotalPrice = (cartDetail, setTotal) => {
  let totalPrice = 0;

  cartDetail &&
    cartDetail.map(item => {
      totalPrice += parseInt(item.price, 10) * item.quantity;
    });
  setTotal(totalPrice);
};
