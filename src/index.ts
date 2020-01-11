import { NumberOperator } from './utils/number-operator'

async function main() {
  const result = NumberOperator.add(1)(2)
  console.log(result)
  NumberOperator.minus(2)(1)
  NumberOperator.print()
}

main()
