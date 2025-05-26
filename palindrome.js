function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

let str1 = "RACECAR";
let str2 = "RECORDER";

console.log(str1 + " is a palindrome: " + isPalindrome(str1));
console.log(str2 + " is a palindrome: " + isPalindrome(str2));
