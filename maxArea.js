var maxArea = function (height) {
  let maxVolume = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let volume = Math.min(height[left], height[right]) * (right - left);
    maxVolume = Math.max(volume, maxVolume);

    if (height[right] > height[left]) left++;
    else right--;
  }

  return maxVolume;
};
