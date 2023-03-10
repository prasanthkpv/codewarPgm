function sumPairs(ints, s) {
    let subSetPair = [];
    for(let first = 0; first < ints.length; first++){
        if(ints.includes((s - ints[first]), first+1)){
              subSetPair.push([ints.indexOf(s - ints[first], first+1), [ints[first], s - ints[first]]])
            }
        
    }
    console.log(subSetPair);
    if(subSetPair.length == 0) return undefined;
    subSetPair.sort(function(a, b) {
        return a[0] - b[0];
    });
    return subSetPair[0][1];
  }

const result = sumPairs([10, 5, 2, 3, 7, 5], 10);
console.log(result);