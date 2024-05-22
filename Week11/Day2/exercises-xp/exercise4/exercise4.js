var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    // A push method that adds an element of type T to the stack.
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // A pop method that removes the top element from the stack and returns it.
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // An isEmpty method that checks whether the stack is empty.
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Stack;
}());
// Example usage
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); 
console.log(numberStack.isEmpty()); 
var stringStack = new Stack();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop()); 
console.log(stringStack.isEmpty()); 
