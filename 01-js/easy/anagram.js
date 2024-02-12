/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// way 1
function isAnagram(str1, str2) {
  if(str1.length !== str1.length){
    return false;
  }

  return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
}

// way 2
// function isAnagram(str1, str2) {
//   const count = new Array(26).fill(0);

//   str1
//     .split("")
//     .forEach((char) => ++count[char.charCodeAt(0) - 'a'.charCodeAt(0)]);
//   str2
//     .split("")
//     .forEach((char) => --count[char.charCodeAt(0) - 'a'.charCodeAt(0)]);

//   let flag = true;

//   count.forEach((item) => {
//     if (item !== 0) {
//       flag = false;
//       return;
//     }
//   });

//   return flag;
// }

//way 3
// function isAnagram(str1, str2) {
//   const count = {};

//   str1.split("").forEach((char) => {
//     if (!Object.hasOwn(count, char)) {
//       count[char] = 1;
//     }else{
//       ++count[char];
//     }
//   });

//   str2.split("").forEach((char) => {
//     if (!Object.hasOwn(count, char)) {
//       count[char] = 1;
//     }else{
//       --count[char];
//     }
//   });

//   console.log(count);

//   let flag = true;

//   Object.values(count).forEach((item) => {
//     if (item !== 0) {
//       flag = false;
//       return;
//     }
//   });

//   return flag;
// }

module.exports = isAnagram;
