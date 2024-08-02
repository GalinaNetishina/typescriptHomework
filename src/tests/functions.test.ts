import Cart from '../ts/Cart';

// const testPrices = (count: number): number[] => {
//     return Array.from({length: count}, () => Math.floor(Math.random)*100)
// }

const cart = new Cart()

beforeEach(()=>{
    cart.clear();
})

describe('tests of sum', () => {
    it.each([
        [[10, 20, 30, 50], 110],
        [[20, 100, 30], 150]
    ])
    ('sum without discount with prices %s = %i', (prices, correctSum) => {
        let testId: number = 1;
        prices.forEach((testPrice)=>{
            cart.add({
                id: testId, 
                name: `item${testId}`, 
                price: testPrice
            })
            testId++;
        })

        const received = cart.sumFull();
        expect(received).toBe(correctSum);
    })

    it.each([
        [[10, 20, 30, 40], 10, 90],
        [[20, 10, 30, 40], 20, 80],
        [[20, 10, 30, 40], 50, 50]
    ])
    ('sum with prices %s and discount %i % = %i', (prices, discount, correctSum) => {
        let testId: number = 1;
        prices.forEach((testPrice)=>{
            cart.add({
                id: testId, 
                name: `item${testId}`, 
                price: testPrice
            })
            testId++;
        })

        const received = cart.sumWithDiscount(discount);
        expect(received).toBe(correctSum);
})})

describe('tests of del', () => {

    it('delete of existing item', () => {
        cart.add({
            id: 100,
            name: 'Test1',
            price: 300
        });
        cart.add({
            id: 101,
            name: 'Test2',
            price: 3000
        });
        const countBeforeDeleting = cart.items.length
        cart.del(100);
        expect(cart.items.length).toBe(countBeforeDeleting - 1);
    })

    it('delete of unexisting item', () => {
        expect(()=>cart.del(103)).toThrow('element not found');
    })
})