/**
 * Given 2 arrays, create a function that let's a user know (true/false) whether
 * these two arrays contain any commin items.
 * 
 * For Example:
 * const array1 = [ 'a', 'b', 'c', 'x' ];
 * const array2 = [ 'z', 'y', 'i' ];
 * Should return false.
 * 
 * ------------------
 * 
 * const array1 = [ 'a', 'b', 'c', 'x'];
 * const array2 = [ 'z', 'y', 'x' ];
 * Should return true;
 */


 // 2 parameters - Arrays - no size limit
 // return true or false

 // O(n^2)

//  function containsCommonItem(array1, array2) {
//      return !!array1.find(letter => array2.includes(letter));
//  }

//  const array1 = [ 'a', 'b', 'c', 'x' ];
//  const array2 = [ 'z', 'y', 'x' ];

//  console.log(containsCommonItem(array1, array2));

const array1 = [ 'a', 'b', 'c', 'x' ];
const array2 = [ 'z', 'y', 'x' ];
 

//O(a*b)
//O(1) - Space Complexity
function containsCommonItem(arr1, arr2) {
     for(let i=0; i < arr1.length; i++) {
        for(let j=0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
               return true; 
            }
        }
     }
     return false;
 }


 console.log(containsCommonItem(array1, array2))


/**
 * array1 => obj {
 *  a: true,
 *  b: true,
 *  c: true,
 *  x: true,
 * }
 * 
 * array2[index] === obj.properties
 */

 // O(a+b);
 // O(a) - Space Complexity
 function containsCommonItem2(arr1, arr2) {
     // loop through first array and create object where properties === items in the array.
     // can we assume always 2 params?
     let map = {};
     for(let i=0; i < arr1.length; i++) {
         const item = arr1[i];
         if(!map[item]) {
             map[item] = true;
         }
     }
     // loop through second array and check if item in second array exists on created object.
     for(let j=0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true;
        }
     }
     return false;
 }

 console.log(containsCommonItem2(array1, array2));


 function containsCommonItem3(arr1, arr2) {
     return arr1.some(item => arr2.includes(item));
 }

 console.log(containsCommonItem3(array1, array2));