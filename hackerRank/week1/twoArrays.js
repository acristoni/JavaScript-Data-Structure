const A = [1, 2, 2, 1]
const B = [3, 3, 3, 4]
const k = 5

function permutator(inputArr) {
    var results = [];
  
    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
  
      return results;
    }
  
    return permute(inputArr);
}

function twoArrays(k, A, B) {
    const permutQueriesA =  permutator(A)
    const permutQueriesB =  permutator(B)
    let gabarito = ''
    const length = A.length

    for (let i = 0; i < length; i++) {
        gabarito = gabarito + '1'
    }

    for (const queryA of permutQueriesA) {
        for (const queryB of permutQueriesB) {
            let camparasao = ''

            for (let i = 0; i < length; i++) {
                if ((queryA[i] + queryB[i]) >= k){
                    camparasao = camparasao + '1'
                }
            }

            if (camparasao === gabarito) {
                return 'YES'
            }

        }
    }

    return 'NO'
}

console.log(twoArrays(k, A, B))