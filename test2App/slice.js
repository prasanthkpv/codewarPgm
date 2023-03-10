function findEvenIndex(arr)
{
    let length = arr.length;
    for(let index = 0; index <= length ; index++){ 
        let left = arr.slice(0, index);
        let right = arr.slice(index+1, length)
        let leftSum = 0;
        let rightSum = 0;
        for (let item of left) {
            leftSum += item;
          }
          for (let item of right) {
            rightSum += item;
          }
        if(leftSum === rightSum){
            return index;
        }
    }
    return -1
}

const result = findEvenIndex([1,2,4,3,2,1]);
console.log(result);