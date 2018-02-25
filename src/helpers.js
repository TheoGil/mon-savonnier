const saveCartToLocalStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};

export {
  saveCartToLocalStorage,
};
