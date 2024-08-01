import Cart from './Cart';

const cart = new Cart;

cart.add({
    id: 100,
    name: 'Test',
    price: 300
});

console.log(cart.items)