// import {
//   addToCart,
//   totalPrice as tp,
//   totalQuantity as tq,
// } from './shoppingCart.js';

// import * as shoppingCart from './shoppingCart.js';

console.log('Importing module');

import add, {
  addToCart,
  totalPrice as tp,
  totalQuantity as tq,
} from './shoppingCart.js';

add('bread', 1000);
addToCart('bread', 5);

//shoppingCart.addToCart('bread', 5);

//console.log(shoppingCart.totalPrice, shoppingCart.totalQuantity);
console.log(tp, tq);
