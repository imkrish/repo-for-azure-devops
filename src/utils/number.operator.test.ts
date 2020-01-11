import { NumberOperator } from './number-operator'

test('add 1 and 2 to equal 3', () => {
  expect(NumberOperator.add(1)(2)).toBe(3)
})

test('add 2 and 4 to equal 6', () => {
  expect(NumberOperator.add(2)(4)).toBe(6)
})
