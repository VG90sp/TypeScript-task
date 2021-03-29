import Cart from '../service/Cart';
import Movie from '../domain/Movie';



test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart add', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));
  expect(cart.items).toEqual([{id: 1, name: "The Avengers", price: 500, year: 2012, countries: "USA", tagline: "Avengers Assemble", genre: ['fantastic','fantasy'], time: 137}]);
})
test('test sumWithoutSale', ()=>{
  const cart = new Cart();
  cart.add(new Movie(1, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));
  cart.add(new Movie(2, 'Zack Snyders Justice League', 600, 2021,'USA',"«Нельзя спасти мир в одиночку»",['fantastic','fantasy'],242));

  expect(cart.sumWithoutSale()).toBe(1100);
})
test('test sumWithSale', ()=>{
  const cart = new Cart();
  cart.add(new Movie(1, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));
  cart.add(new Movie(2, 'Zack Snyders Justice League', 1000, 2021,'USA',"«Нельзя спасти мир в одиночку»",['fantastic','fantasy'],242));
  expect(cart.sumWithSale(10)).toBe(1350);
})
test('cart delete', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));
  cart.add(new Movie(2, 'Zack Snyders Justice League', 1000, 2021,'USA',"«Нельзя спасти мир в одиночку»",['fantastic','fantasy'],242));
    cart.cartDelete(2);

  expect(cart.items).toEqual([{id: 1, name: "The Avengers", price: 500, year: 2012, countries: "USA", tagline: "Avengers Assemble", genre: ['fantastic','fantasy'], time: 137}]);
})