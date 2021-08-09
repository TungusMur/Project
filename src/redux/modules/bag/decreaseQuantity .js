const decreaseQuantity = (state, payload) => {
  const oldState = state;
  const newProduct = payload;
  let check = false;
  oldState.bag.forEach((item) => {
    if ((item.product.id === newProduct.id) && (item.product.option === newProduct.option)) {
      item.product.quantity -= 1;
      if (item.product.quantity === 0) {
        check = true;
      }
    }
  });
  if (check) {
    oldState.bag = oldState.bag.filter((item) => item.product !== payload);
  }
  return (
    oldState.bag
  );
};
export default decreaseQuantity;
