/*Challenge 1:
write a function called solution that is an sort array for -1 values.

array contains integers.
*/
 
function solution(arr) {
    // Create an array to store non-negative values
    const nonNegative = arr.filter(num => num !== -1);
    
    // Sort the non-negative values in ascending order
    nonNegative.sort((a, b) => a - b);
    
    // Create a new array to store the sorted values, keeping -1 at their original index positions
    let sortedArray = [];
    let nonNegativeIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            // If the element is -1, add it to the sorted array
            sortedArray.push(-1);
        } else {
            // If the element is not -1, add the next non-negative value from the sorted array
            sortedArray.push(nonNegative[nonNegativeIndex]);
            nonNegativeIndex++;
        }
    }
    
    return sortedArray;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([5, 3, 1]));
console.log(solution([-1, -1, -1, -1]));
console.log(solution([100, -1, 50, -1, 75]));


/*challenge 2:
write a javascript function called countVowels takes a string and then counts the number of vowels in the string and outputs 
 */
 
function countVowels(str) {
    // Define an array containing all vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a count variable for vowels
    let count = 0;
    
    // Loop through each character in the string
    for (let char of str.toLowerCase()) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // If it's a vowel, increment the count
            count++;
        }
    }
    
    // Return the count of vowels
    return count;
}

const input1 = 'Hello, World!';
console.log(countVowels(input1)); // Output: 3

const input2 = 'Counting Vowels';
console.log(countVowels(input2)); // Output: 5


 /*challenge 3:
 Write a JavaScript function called findSumOfTwo that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.
Implement the findSumOfTwo function using either the provided example solutions or your own solution.
12:20
function findSumOfTwo(numbers, target) {
}
console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7] console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5] (edited) 
 */

function findSumOfTwo(numbers, target) {
    const numSet = new Set();

    for (let num of numbers) {
        const complement = target - num;
        if (numSet.has(complement)) {
            return [complement, num];
        }
        numSet.add(num);
    }

    return [];
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]
console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]
