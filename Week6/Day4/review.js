/** 
* findIntersection function return an array that
* contain the numbers exist in both strings from the array.
* ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
*/

function findIntersection(arr){
    let arr1 = arr[0].split(',');
    let arr2 = arr[1].split(',');
    let ret = arr1.filter((item) => {return arr2.includes(item)});
    return ret;
}

console.log(findIntersection(["1,2,5,6,7", "2,5,7,8,15"]));