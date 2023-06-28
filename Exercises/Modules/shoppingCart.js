console.log('Exporting from module');

const shippingCost = 10;
const cart = [];

// Blcoking async operation
// All code below will get blocked.
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish long running operation');

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
