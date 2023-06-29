const shoppingCart = (function () {
  const shopNumber = 2008;
  const cart = [];

  const addToCart = function (name, quantity) {
    cart.push({ name, quantity });
    console.log(`${quantity} ${name} added to cart`);
  };

  return {
    addToCart,
    shopNumber,
  };
})();

shoppingCart.addToCart("Bread", 5);
shoppingCart.addToCart("Energy Bar", 10);
