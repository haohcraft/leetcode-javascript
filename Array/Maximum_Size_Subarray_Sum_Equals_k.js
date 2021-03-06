/**
Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Example 1:
Given nums = [1, -1, 5, -2, 3], k = 3,
return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

Example 2:
Given nums = [-2, -1, 2, 1], k = 1,
return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

Follow Up:
Can you do it in O(n) time?
**/
// 1. sum[0, i] = k
// 2.  sum[i, j] = k => sum[0, j] - sum[0, i] = k
function sumToK(nums, k) {
    if(!nums || !nums.length) return 0;
    var map = {};
    var sum = 0;
    var max = 0;
    for(var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === k) {
            max = i + 1;
        } else if(map[sum - k] !== undefined) {
            max = Math.max(max, i - map[sum - k]);
        }

        map[sum] = i;
    }

    return max;
}