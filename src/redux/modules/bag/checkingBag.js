const checkingBag = (state, payload) => {
  const newProduct = payload;
  const oldState = state;

  let check = true;
  oldState.bag.forEach((item) => {
    if (item.product.id === newProduct.id && item.product.option === newProduct.option) {
      item.product.quantity += 1;
      check = false;
    }
  });
  if (check) {
    newProduct.quantity = 1;
    oldState.bag.push({ product: newProduct });
  }
  return oldState.bag;
};

export default checkingBag;
