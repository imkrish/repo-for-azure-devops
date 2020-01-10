import { add } from './utils/number-operator'

async function main() {
  const result = add(1)(2)
  console.log(result)
}

main()
