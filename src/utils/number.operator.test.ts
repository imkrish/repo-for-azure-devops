import { add } from './number-operator'

test('add 1 and 2 to equal 3', () => {
  expect(add(1)(2)).toBe(3)
})
