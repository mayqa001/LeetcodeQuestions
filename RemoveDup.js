/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  var table = new Map();

  if (nums.length === 0) return 0;
  for (var i = 0; i < nums.length; i++) {
    table.set(nums[i], i);
  }
  nums = Array.from(table.keys());
  return nums.length;
};

console.log(removeDuplicates(nums));
