// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashTable = {}
    for(let i = 0,j = nums.length;i<j;i++){
        let _item = nums[i],
            _next = target - _item
        if(hashTable.hasOwnProperty(_next)){
            return [hashTable[_next],i]
        } else {
            hashTable[_item] = i
        }
    }
    return []

};
var nums = [3,2,4]
var target = 6
console.log(twoSum(nums,target))
