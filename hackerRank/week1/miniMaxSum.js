const array = [7, 69, 2, 221, 8974]

function miniMaxSum(array) {
    const arr = array.sort()

    const minSum = arr[0] + arr[1] + arr[2] + arr[3]
    const maxSum = arr[1] + arr[2] + arr[3] + arr[4]

    return console.log(`${minSum} ${maxSum}`)
}

miniMaxSum(array)