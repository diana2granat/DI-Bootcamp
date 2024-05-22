class Stack<T> {
    private items: T[] = [];

    // A push method that adds an element of type T to the stack.
    push(item: T): void {
        this.items.push(item);
    }

    // A pop method that removes the top element from the stack and returns it.
    pop(): T | undefined {
        return this.items.pop();
    }

    // An isEmpty method that checks whether the stack is empty.
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// Example usage
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); 
console.log(numberStack.isEmpty()); 

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop()); 
console.log(stringStack.isEmpty()); 
