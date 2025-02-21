// reduce is used, when you have to reduce it to one vlaue
// like product of all the values or sum
const nums = [1,2,3,4,5,6];
console.log(nums);

const sum = nums.reduce((accumulator, ele)=> {
    return accumulator+ele;
}, 0); // here 0 is written just to tell the initial value of accumulator
// is the initial value is not provided then the accumulator take the first index as the starting value

console.log(sum);

// in one line the same thing can be like
const product = nums.reduce((accumulator, ele)=> accumulator*ele, 1);
console.log(product);
