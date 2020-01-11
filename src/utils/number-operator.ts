export class NumberOperator {
  static add = (num1: number) => (num2: number) => {
    var x = 1;
    return num1 + num2;
  };

  static minus = (num1: number) => (num2: number) => num1 - num2;

  static print = () => {
    console.log("hehe");
  };
}
