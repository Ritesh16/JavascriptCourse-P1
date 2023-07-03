import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'Bread', quantity: 5 },
    { product: 'Pizza', quantity: 1 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);

state.user.loggedIn = false;

const stateCloneDeep = cloneDeep.cloneDeep(state);

console.log(1, stateClone);
console.log(1, stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}

Promise.resolve('TEST').then(x => console.log(x));
