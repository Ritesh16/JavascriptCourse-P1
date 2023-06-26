console.log('Exporting from module');

const shippingCost = 10;
const cart = [];

// Named exports
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
};

const totalPrice = 10;
const totalQuantity = 25;

export { totalPrice, totalQuantity };

// Default exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
}
