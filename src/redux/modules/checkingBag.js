const checkingBag = (oldState, payload) => {
  if (oldState === []) {
    payload.quantity = 1;
    oldState.bag.push({product: payload});
    return (
      oldState.bag
    );
  }
  else {
    let check = true;
    oldState.bag.forEach(item => {
      if ((item.product.id === payload.id) && (item.product.option === payload.option)) {
        console.log(item);
        item.product.quantity += 1;
        check = false;
      }
    });
    if(check){
      payload.quantity = 1;
      oldState.bag.push({product: payload});
    }
    return (
      oldState.bag
    )
  }
};

export default checkingBag;
