import Cart from '../ts/Cart';
import Book from '../ts/domain/Book';
import Gadget from '../ts/domain/Gadget';

test('new cart should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
})

const cart = new Cart();
const itemCountable = new Gadget(100, 'Test1', 'some', 500);
const itemBuyable = new Book(103, 'Test2', 'author', 300, 500);

describe('tests of adding and deleting items', () => {

    it('uncountable adds one time', () => {        
        cart.add(itemBuyable);
        expect(cart.items.length).toBe(1)
        expect(cart.items[0]).toBe(itemBuyable);
    })

    it('countable add correct', () => {        
        cart.add(itemCountable);
        cart.add(itemCountable);
        expect(cart.items.length).toBe(2)
        expect(cart.items[1].count).toBe(2);
    })

    it('countable delete correct', () => {        
        cart.del(itemCountable.id);
        expect(cart.items.length).toBe(2)
        expect(cart.items[1].count).toBe(1);
        cart.del(itemCountable.id);
        expect(cart.items.length).toBe(1)
        expect(()=>{cart.del(itemCountable.id)}).toThrow();
    })
})


describe('tests of Sum', () => {

    it('sum without discount', () => {        
        cart.add(itemCountable);
        expect(cart.sumFull()).toBe(800);
        cart.add(itemCountable);
        expect(cart.sumFull()).toBe(1300);
    })

    it('sum with discount', () => {        
        expect(cart.sumWithDiscount(20)).toBe(1040);
    })
})