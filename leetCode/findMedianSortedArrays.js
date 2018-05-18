// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
//
// 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
//
// 示例 1:
//
// nums1 = [1, 3]
// nums2 = [2]
//
// 中位数是 2.0
// 示例 2:
//
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// 中位数是 (2 + 3)/2 = 2.5
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1 = [], nums2 = []) {
    var nums = nums1.concat(nums2)
    nums.sort((a,b) => a - b)
    var len = nums.length,
        _index = Math.floor(len / 2)

    if(len % 2 === 0){
        return (nums[_index - 1] + nums[_index]) / 2
    } else if(len % 2 == 1){
        return nums[_index]
    }
};
var nums1 = [1,3]
var nums2 = [2,4]
console.log(findMedianSortedArrays(nums1,nums2))

// const findMedianSortedArrays = function(nums1, nums2) {
//     const totalLen = nums1.length + nums2.length
//
//     let i = 0
//     let j = 0
//     let x, y
//
//     for (let k = 0, len = (totalLen >> 1) + 1; k < len; k++) {
//         x = y
//         if (nums2[j] == null || nums1[i] < nums2[j]) {
//             y = nums1[i++]
//         } else {
//             y = nums2[j++]
//         }
//     }
//
//     return totalLen % 2 ? y : (x + y) / 2
// }
