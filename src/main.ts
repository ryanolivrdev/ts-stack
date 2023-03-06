import { Stack } from "./stack";

const stack = new Stack<number>(3);
const stackReverse = new Stack<number>(3);
const stackString = new Stack<string>(7);

stack.push(1);
stack.push(2);
stack.push(3);

stackReverse.push(1);
stackReverse.push(2);
stackReverse.push(3);

stackString.push("L");
stackString.push("e");
stackString.push("t");
stackString.push("i");
stackString.push("c");
stackString.push("i");
stackString.push("a");

console.log("A lista esta cheia?", stack.isFull());

console.log("Top");
console.log("-----------");
while (!stack.isEmpty()) {
  console.log(stack.pop());
}
console.log("-----------");
console.log("Base");

stackReverse.reverse();

console.log("Top");
console.log("-----------");
while (!stackReverse.isEmpty()) {
  console.log(stackReverse.pop());
}
console.log("-----------");
console.log("Base");

const sortedStack = stackString.sortAlphabetically(stackString);

console.log("Top");
console.log("-----------");
while (!sortedStack.isEmpty()) {
  console.log(sortedStack.pop());
}
console.log("-----------");
console.log("Base");
