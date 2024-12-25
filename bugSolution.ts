function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Both parameters must be numbers');
  }
}

let result1 = addSafe(1, "2"); // This throws a TypeError
let result2 = addSafe(1, 2); // This works correctly
console.log(result2); 