function threeSumClosest(nums, target) {
  if (nums.length < 3) {
    return 0; // Return some default value, or handle the edge case as needed
  }

  nums.sort((a, b) => a - b); // Sort the input array

  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
