// Return every products in cart
const getCartContent = state => state.cart.products;

// Return total price of cart
const getSubTotal = (state) => {
  let subTotal = 0;
  state.cart.products.forEach((product) => {
    subTotal += product.quantity * product.price;
  });
  return subTotal;
};

// Return total count of items in cart
const getProductsCount = (state) => {
  let count = 0;
  state.cart.products.forEach((product) => {
    count += 1 * product.quantity;
  });
  return count;
};

// Return total count of items in cart
const getProducts = state => state.products;

export {
  getCartContent,
  getSubTotal,
  getProductsCount,
  getProducts,
};
