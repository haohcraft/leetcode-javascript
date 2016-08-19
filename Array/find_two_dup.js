//Find the two repeating elements in a given array
// You are given an array of n+2 elements. All elements of the array are in range 1 to n. And all elements occur once except two numbers which occur twice. Find the two repeating numbers.
//  array = [4, 2, 4, 5, 2, 3, 1] => [4,2]

// HINT:
// Try to take advantage of `1 to n`, and we can regard each value as an index to look up a reference array

function findTwoDups(nums, n) {
    if(!nums || !n) return [];
    var mapArr = [];
    var result = [];
    for(var i = 0; i<nums.length; i++) {
        var index = nums[i];
        if(mapArr[index]) {
            result.push(index);
        } else {
            mapArr[index] = 1;
        }
    }
    
    return result;
}

console.log(findTwoDups([4, 2, 4, 5, 2, 3, 1], 5))