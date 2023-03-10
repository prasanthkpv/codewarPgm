function sumStrings(a,b) { 
    let arr1 = [...a];
    let arr2 = [...b];
    let n1 = arr1.length;
    let n2 = arr2.length;
    let smallest = n1;
    let largest = n2;
    if( n1 > n2 ){
        largest = n1;
        smallest = n2;
    }
    let num1 = 0;
    let num2 = 0;
    let balance = 0;
    let left = n1 - 1;
    let right = n2 - 1;
    let index = 0;
    let sumArray = [];
    while(index < smallest){
        num1 = parseInt(arr1[left]);
        num2 = parseInt(arr2[right]);
        digitSum = num1 + num2 + balance;
        balance = parseInt(digitSum/10);
        digitSum = digitSum % 10 ? digitSum % 10 : 0;
        sumArray[(largest - index)] = digitSum;
        // console.log(sumArray);
        left -=1;
        right -=1;
        index +=1;
    }
    for(index = Math.abs(smallest - n1); index > 0; index--){
        num1 = parseInt(arr1[index-1]);
        digitSum = num1 + balance;
        balance = parseInt(digitSum /10);
        digitSum = digitSum % 10 ? digitSum %10 : 0;
        sumArray[index] = digitSum;
    }
    for(index = Math.abs(smallest - n2); index > 0; index--){
        num2 = parseInt(arr2[index-1]);
        digitSum = num2 + balance;
        balance = parseInt(digitSum /10);
        digitSum = digitSum % 10 ? digitSum %10 : 0;
        sumArray[index] = digitSum;
    }
    // console.log(balance)
    if(!balance){
        sumArray >>> 1;
    }
    else sumArray[0] = balance;
    console.log(sumArray.join('').toString())
    return sumArray.join('').toString(); // Fix me!
  }

  console.log(sumStrings('123','456'))