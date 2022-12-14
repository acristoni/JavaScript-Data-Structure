const arr = [5,3,1,2,4,6]

function findMedian(arr) {
    const sortArray = arr.sort(function(a, b){return a-b});
    const medianIndex = parseInt(sortArray.length/2) 
    const result = sortArray[medianIndex]
    console.log("🚀 ~ file: findMedian.js:7 ~ findMedian ~ sortArray", sortArray)

    return result
}

console.log(findMedian(arr))