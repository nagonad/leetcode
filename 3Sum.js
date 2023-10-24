var threeSum = function (nums) {
  let arr = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let target = -nums[i];
      let low = i + 1;
      let high = nums.length - 1;
      while (low < high) {
        if (nums[low] + nums[high] === target) {
          arr.push[(nums[low], nums[high], target)];
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] < target) {
          low++;
        } else {
          high--;
        }
      }
    }
  }
  return arr;
};

console.log(threeSum([-5, -2, 1, 3, 4, 6]));
