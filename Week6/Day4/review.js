/** 
* findIntersection function return an array that
* contain the numbers exist in both strings from the array.
* ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
*/

// function findIntersection(arr){
//     let arr1 = arr[0].split(',');
//     let arr2 = arr[1].split(',');
//     let ret = arr1.filter((item) => {return arr2.includes(item)});
//     return ret;
// }

// console.log(findIntersection(["1,2,5,6,7", "2,5,7,8,15"]));

/** JSON */

let posts = `[
    {
      "userId": 4,
      "id": 31,
      "title": "ullam ut quidem id aut vel consequuntur",
      "body": "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae"
    }
  ]`;
  
  let arr = JSON.parse(posts);
  // console.log(arr);
  // console.log(posts);
  
  let post = [
    {
      userId: 4,
      id: 31,
      title: "ullam ut quidem id aut vel consequuntur",
      body: "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae",
    },
  ];
  
  // console.log(JSON.stringify(arr,null,2));
  
  let users = [
    { id: 1, username: "aaa", password: "123456" },
    { id: 2, username: "bbb", password: "ab45tf" },
    { id: 3, username: "ccc", password: "1q2w3e" },
  ];
  
  const whatever = (key, value) => {
    if(key === 'password') return undefined
    if (value === "bbb") {
      return 'xxxx';
    }
    if(key === 'id') {
      return 111
    }
    return value;
  };
  
  console.log(JSON.stringify(users, whatever, 2));
  /**
   * findIntersection function return an array that
   * contain the numbers exist in both strings from the array.
   * ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
   */
  
  // function findIntersection(arr) {
  //   let arr1 = arr[0].split(",");
  //   let arr2 = arr[1].split(",");
  //   console.log(arr1, arr2);
  //   let ret = arr1.filter(
  
  //     (item) => {
  //       return arr2.includes(item);
  //   }
  
  //   );
  //   return ret;
  // }
  
  // console.log(findIntersection(["1,2,5,6,7", "2,5,7,8,15"]));
  
  // function x(a, b) {
  //   return a + b;
  // }
  // let sum = x(1,6);
  // console.log(sum);
  
  // class Video {
  //   // a =title b=uploader c=time
  //   constructor(a, b, c) {
  //     this.title = a;
  //     this.uploader = b;
  //     this.time = c;
  //   }
  //   watch() {
  //     return `${this.uploader} watched all ${this.time} of ${this.title}!`;
  //   }
  // }
  
  // // let video1 = new Video("aaa", "bbb", 5);
  // // let watch1 = video1.watch();
  // // console.log(video1);
  
  // // let video2 = new Video("cccc", "ddd", 5555);
  // // let watch2 = video2.watch();
  // // console.log(video2);
  
  // let arr5videos = [
  //   { title: "aaa", uploader: "bbb", time: 8 },
  //   { title: "ccc", uploader: "ddd", time: 88 },
  //   { title: "eee", uploader: "fff", time: 888 },
  //   { title: "sss", uploader: "nnn", time: 5 },
  //   { title: "uuu", uploader: "ppp", time: 65 },
  // ];
  
  // let arr = [];
  // arr5videos.forEach((item) => {
  //   let video = new Video(item.title, item.uploader, item.time);
  //   arr.push(video);
  // });
  
  // console.log(arr);
  
  // arr.forEach(item => {
  //   console.log(item.watch());
  // })

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h2>Get All Users</h2>
//     <form method="GET" action="https://jsonplaceholder.typicode.com/users">
//         <input name="id"/>
//         <input type="submit" value="Send"/>
//     </form>
//     <h2>Get Post</h2>
//     <form method="GET" action="https://jsonplaceholder.typicode.com/posts">
//         <input type="hidden" id="userid" name="userId" value=""/>
//         <input type="submit" value="dfgdfhdhsdg"/>
//     </form>
//     <script>
//         document.getElementById('userid').value = 8;
//     </script>
//     <h2>Contact Form</h2>
//     <form method="GET">
//         Name: <input name="username"/><br/>
//         Phone: <input name="phone"/><br/>
//         Message: <input name="msg"/><br/>
//         Url: <input name="msg"/><br/>
//         <input type="submit" value="Send"/>
//     </form>

//     <h2>Contact Form With POST</h2>
//     <form method="POST" action="https://jsonplaceholder.typicode.com/posts">
//         Userid: <input name="userId"/><br/>
//         Title: <input name="title"/><br/>
//         Body: <input name="body"/><br/>
//         <input type="submit" value="Send"/>
//     </form>

//     <script src="script.js" defer async></script>
// </body>
// </html>


// <!-- 
// Add a user
// 1. A form with post method
// 2. Action https://users-18kl.onrender.com/user
// 3. Input name -> name
// 3. input name -> email
// 4. input name -> username
// 5.  Submit
//  --></meta>

/** exeption */

console.log("before");

// try {
//   hello;
// } catch (err) {
//   console.log(err.message);
// }

// function x() {
//   try{
//   hello;
//   }
//   catch(e){
//     throw new Error('opps...')
//   }
//   // finally{
//   //   console.log('rrr');
//   // //   let x = 0
//   // }
// }

// function y() {
//   try {
//     x();
//   } catch (e) {
//     // console.log(e.message, e.name, e.stack);
//   }
// }

// y()
// console.log("after");