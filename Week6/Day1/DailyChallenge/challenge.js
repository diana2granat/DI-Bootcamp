let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// 1) Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => groceries.fruits.forEach(fruit => console.log(fruit));
displayGroceries();

// 2) Create another arrow function named cloneGroceries.
//     In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
//         Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
//     In the function, create a variable named shopping that is equal to the groceries variable.
//         Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
//         Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// 3) Invoke the cloneGroceries function.

const cloneGroceries = () => {
    let user = client; //At this point, user holds the value "John", which is independent of client.
    client = "Betty"; //Changing the value of client later to "Betty" (client = "Betty";) does not affect user.
    console.log(user); 

    let shopping = groceries;
    groceries.totalPrice = "35$"; 
    groceries.other.paid = false;
    console.log(shopping); //modifying the totalPrice and paid keys of the 'groceries' object reflectes in the shopping object as well, both shopping and groceries reference the same object in memory.
};
cloneGroceries();




