function twoSum(numbers, target) {
    for(let index=0; index < numbers.length - 1;index++){
        for(let secondIndex = index +1; secondIndex < numbers.length; secondIndex++){
            if(numbers[index] + numbers[secondIndex] === target ) 
                return  [index, secondIndex]
        }
    }
  }

const result = twoSum([2,2,3],4);
console.log(result);