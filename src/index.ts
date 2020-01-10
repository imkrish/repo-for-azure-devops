import { add, minus, print } from './utils/number-operator'

async function main() {
  const result = add(1)(2)
  console.log(result)
  minus(2)(1)
  print()
}

main()
