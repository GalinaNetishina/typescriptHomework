import Cart from '../ts/Cart';

test('new cart should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
})