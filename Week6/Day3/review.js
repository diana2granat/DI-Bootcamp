/** Object method */
// let user = {
//   name: "John",
//   email: "jjj@gmail.com",
//   age: 26,
//   address: {
//     city: {
//       c: "ta",
//     },
//   },
// };

// const [b, a] = [2, 4];
// const { email, name, age, address:{city:{c}} } = user;
// console.log(c);

// function getUserInfo({
//   email,
//   name,
//   age,
//   address: {
//     city: { c },
//   },
// }) {
//   return c;
// }

// console.log(getUserInfo(user));

// let user = {
//   name: "John",
//   email: "jjj@gmail.com",
//   age: 26,
// };

// user.name
// user["name"]

// for(let x in user){
//     console.log(x, user[x]);
// }

/** Object.keys */
// let keys = Object.keys(user);
// console.log(keys);

/** Object.values */
// let values = Object.values(user);
// console.log(values);

/** Object.entries */
// let entries = Object.entries(user);
// console.log(entries);

// entries.forEach(([a, b]) => {
//   //   const [key, value] = item;
//   console.log(a, b);
// });

// let arr = [
//   ["name", "John"],
//   ["email", "jjj@gmail.com"],
//   ["age", 26],
// ];

// /** Object.fromEntries */
// let obj = Object.fromEntries(arr);
// console.log(obj);

// let user = {
//   name: "John",
//   email: "jjj@gmail.com",
//   age: 26,
//   address: {
//     city: "Tel Aviv",
//   },
//   x: function (name) {
//     return "Hello, " + name;
//   },
// };

// let a = user.x('John')
// console.log(a);
// // let user1 = { ...user };
// /** JSON */
// let userJson = JSON.stringify(user);
// console.log(user);
// console.log(userJson);

// let user1 = JSON.parse(userJson);
// console.log(user1);

// let user = {
//   name: "John",
//   email: "jjj@gmail.com",
//   age: 26,
// };

// /** Spreading */
// let user1 = {...user, name:'Marry', status:'Single'}

// // user1.name = 'Marry'

// console.log(user);
// console.log(user1);

/** this */
// console.log(this.document);

// let obj = {
//   name: "John",
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(obj.getName());

/** Class */

class Animal {
    constructor(type, name) {
      this.type = type;
      this.name = name;
    }
    getType() {
      return this.type;
    }
    setName(name) {
      this.name = name;
    }
    getTypeAndName() {
      return this.type + " " + this.name;
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super("Dog", name);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super("Cat", name);
    }
    setType(param) {
      this.type = param;
    }
    getType() {
      return "bo";
    }
  }
  
  let dog1 = new Dog("Shadow");
  let cat1 = new Cat("chichi");
  cat1.setType("CatCat");
  console.log(cat1.getType());
  
  // let myDod = new Animal("Hasky", "Kuku");
  // let myDod1 = new Animal("Hasky", "Kuku3");
  // let urDog = new Animal("Frechi", "Bobo");
  // let arr = [];
  // arr.push(myDod);
  // arr.push(urDog);
  // arr.push(myDod1);
  
  // console.log(arr);
  
  // arr.forEach((item) => {
  //   if (item.getType() === "Hasky") {
  //     console.log(item.name);
  //   }
  // });
  // console.log(urDog);
  
  /**
  Given n, take the sum of the digits of n.
  If that value has more than one digit,
  continue reducing in this way until a single-digit
  number is produced.
  This is only applicable to the natural numbers.
  Examples
      16  -->  1 + 6 = 7
     942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
   */
  
  // function calcDigit(num) {
  //   let arr = new String(num).split("");
  //   console.log(arr);
  //   let ret = 0;
  //   for (let i in arr) {
  //     ret = ret + new Number(arr[i]);
  //   }
  //   console.log(ret);
  //   if (ret < 10) {
  //     return ret;
  //   }
  //   return calcDigit(ret);
  // }
  // console.log(calcDigit(493193));
  
  // function calcDigit(num) {
  //   let digits = new String(num)
  //     .split("")
  //     .reduce((total, num) => total + Number(num), 0);
  //   return newNumbers < 10 ? newNumbers : calcDigit(newNumbers);
  // }