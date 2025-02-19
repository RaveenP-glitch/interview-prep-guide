/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
       arr.push(i);
       for(let j = 0; j<nums.length; j++) {
        if(i == j) {
            continue;
        } else {
            if(nums[i] + nums[j] == target) {
                arr.push(j);
                return arr;
                break;
            }
        }
       }
       arr = [];
    }
};