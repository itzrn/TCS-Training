const nums = [1,2,3,4,5,6];
console.log(nums);

const evens = nums.filter((ele)=> {
    return ele%2 === 0;
});

console.log(evens);