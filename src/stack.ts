class Stack<T> {
  private stack: T[] = [];
  private capacity: number;
  private top: number;

  constructor(capacity: number = 0) {
    this.capacity = capacity;
    this.top = -1;
  }

  public push(item: T): void {
    if (this.top === this.capacity - 1) {
      throw new Error("Stack is full");
    }

    this.top++;
    this.stack[this.top] = item;
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    const item = this.stack[this.top];
    this.top--;
    return item;
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return this.stack[this.top];
  }

  public size(): number {
    if (this.isEmpty()) return 0;
    return this.stack.length;
  }

  public isEmpty(): boolean {
    return this.top === -1;
  }

  public isFull(): boolean {
    return this.size() === this.capacity;
  }

  public reverse(): void {
    const reverseStack: T[] = [];

    for (let i = this.stack.length - 1; i >= 0; i--) {
      reverseStack.push(this.stack[i]);
    }

    this.stack = reverseStack;
  }

  public sortAlphabetically(stack: Stack<string>): Stack<string> {
    const sortedStack = new Stack<string>(stack.size());

    const tempStack = new Stack<string>(stack.size());

    while (!stack.isEmpty()) {
      const item = stack.pop();
      if (!/^[a-zA-Z]$/.test(item)) {
        throw new Error("Stack contains non-letter characters!");
      }
      const lowercaseItem = item.toLowerCase();
      while (!sortedStack.isEmpty() && lowercaseItem > sortedStack.peek().toLowerCase()) {
        tempStack.push(sortedStack.pop());
      }
      sortedStack.push(item);
      while (!tempStack.isEmpty()) {
        sortedStack.push(tempStack.pop());
      }
    }

    return sortedStack;
  }
}

export { Stack };
