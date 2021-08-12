const removingProductFromBag = (state, payload) => {
  const oldState = state;
  const newProduct = payload;
  oldState.bag = oldState.bag.filter((item) => item.product !== newProduct);
  return oldState.bag;
};

export default removingProductFromBag;
