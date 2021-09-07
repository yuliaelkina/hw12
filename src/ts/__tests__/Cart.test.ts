import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
  }
);

test('adding in card', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items.length).toBe(1);
  }
);

test('total', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1200));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.total()).toBe(2100);
  }
);

test('total with discount 10', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1200));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.discountedTotal(10)).toBe(1890);
  }
);

test('total with discount 10', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1200));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.remove(1001);
  expect(cart.items.length).toBe(1);
  }
);