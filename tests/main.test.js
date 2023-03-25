
import {sum} from '../main.js';

test('When adding new valid product, get successful confirmation', () => {
  const number1 = 5;
  const number2 = 10;
  // Generated random input: { 'Handmade Granite Cheese', 704809 }
  expect(sum(number1) (number2)).toBe(true);
  // Test failed, the random input triggered some path we never planned for.
  // We discovered a bug early!
});
