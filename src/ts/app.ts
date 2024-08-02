import Cart from './Cart';
import Movie from './domain/Movie';

const cart = new Cart;

cart.add({
    id: 100,
    name: 'Test',
    price: 300
});

const movie = new Movie(101, 'Мстители', 500, "The Avengers", "США", 2012, "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137)

cart.add(movie)
console.log(cart.items)