const settingQuantity = (state, payload) => {
  const oldState = state;
  const newProduct = payload;
  oldState.bag.forEach((item) => {
    if ((item.product.id === newProduct.id) && (item.product.option === newProduct.option)) {
      item.product.quantity -= 1;
    }
  });
  console.log(oldState);
  return (
    oldState.bag
  );
};
export default settingQuantity;
