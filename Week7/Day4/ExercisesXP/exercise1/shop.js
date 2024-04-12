// Create a function that takes a product name as a parameter and searches for the corresponding product object.
// Call this function with different product names and print the details of the products.
// Run shop.js and verify that the correct product details are displayed.

const { products } = require("./product");

function findProduct(name) {
    const product = products.find(product => {
        return product.name = name;
    });
    if (product) {
        console.log("Product Found:");
        console.log("Name:", product.name);
        console.log("Price:", product.price);
        console.log("Category:", product.category);
    } else {
        console.log("Product not found.");
    }
}

findProduct("Laptop");
findProduct("T-shirt");
findProduct("Phone"); 