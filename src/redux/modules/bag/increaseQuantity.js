const increaseQuantity = (state, payload) => {
  const oldState = state;
  const newProduct = payload;
  oldState.bag.forEach((item) => {
    if ((item.product.id === newProduct.id) && (item.product.option === newProduct.option)) {
      item.product.quantity += 1;
    }
  });
  return (
    oldState.bag
  );
};
export default increaseQuantity;
