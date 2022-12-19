const arr = [1,2,3,3]

function balancedSums(arr) {
    //conplex linear
    for(let i = 0; i < arr.length; i++) {
        //complex const
        let sumLeft = 0
        //complex const
        let sumRight = 0

         //conplex linear
        for(let l = 0; l < i; l++) {
            sumLeft += arr[l]
        }

         //conplex linear
        for(let r = (i + 1); r < arr.length; r++) {
            sumRight += arr[r]
        }

         //conplex const
        if(sumLeft === sumRight) {
            return 'YES'
        }
    }

    return 'NO'
}

function balancedSums(arr) {
    //complex const
    let leftSum = 0; 
    //complex linear
    let rightSum = arr.reduce((a,b) => a + b);
    //complex linear
    for(let i = 0; i < arr.length; i++) {
        if(i !== 0)
        {
            //complex const
            leftSum = leftSum + arr[i - 1];
        }
        //complex const
        rightSum = rightSum - arr[i];
        //complex const
        if(leftSum === rightSum)
        {
            return "YES";
        }
    }
    return "NO";
}

console.log(balancedSums(arr))
