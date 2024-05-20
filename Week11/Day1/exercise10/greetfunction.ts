function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, someone!";
    }
}

// Test the function
console.log(greet());         
console.log(greet("John"));   
