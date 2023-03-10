function factorial(n){
    let fact = '1';
    for(let index = 2; index <= n; index++){
        let iter = index;
        // console.log(n, iter, fact)
        fact = multiply(String(fact),String(iter));  
        // console.log(fact)      
    }
    return fact;
  }

  function multiply(a, b) {
    // a = String(a);
    // b = String(b);
    console.log(a, b);
    if (a == "0" || b === "0") {
      return "0";
    }
    let aArray = [];
    let bArray = [];
  
    if ([...a].length > [...b].length) {
      aArray = [...b];
      bArray = [...a];
    } else {
      aArray = [...a];
      bArray = [...b];
    }
    let n1 = aArray.length;
    let n2 = bArray.length;
    let finalSum = [0];
    let shift = 0;
    let paritalSum = [0];
    for (index = n1 - 1; index >= 0; index--) {
      paritalProduct = 0;
      let digit = parseInt(aArray[index]);
      paritalProduct = product(bArray, digit);
      let firstPart = finalSum.slice(0, finalSum.length - shift);
      let lastPart = finalSum.slice(finalSum.length - shift, finalSum.length);
      paritalSum = add(firstPart, paritalProduct);
      finalSum = paritalSum.concat(lastPart);
      shift += 1;
    }
    let k = 0;
    while (!finalSum[k]) {
      finalSum.shift();
    }
  
    // console.log(finalSum.join("").toString());
    return finalSum.join("").toString();
  }
  function product(bArray, digit) {
    let n = bArray.length;
    let balance = 0;
    let partialResult = [];
    for (let i = n - 1; i >= 0; i--) {
      let element = parseInt(bArray[i]);
      let result = element * digit + balance;
      let product = result % 10;
      balance = parseInt(result / 10);
      partialResult.push(product);
    }
    if (balance) {
      partialResult.push(balance);
    }
    partialResult.reverse().unshift(0);
    return partialResult;
  }
  
  function add(arr1, arr2) {
    let n1 = arr1.length;
    let n2 = arr2.length;
    let smallest = n1;
    let largest = n2;
    if (n1 > n2) {
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
    while (index < smallest) {
      num1 = parseInt(arr1[left]);
      num2 = parseInt(arr2[right]);
      digitSum = num1 + num2 + balance;
      balance = parseInt(digitSum / 10);
      digitSum = digitSum % 10 ? digitSum % 10 : 0;
      sumArray[largest - index] = digitSum;
      left -= 1;
      right -= 1;
      index += 1;
    }
    for (index = Math.abs(smallest - n1); index > 0; index--) {
      num1 = parseInt(arr1[index - 1]);
      digitSum = num1 + balance;
      balance = parseInt(digitSum / 10);
      digitSum = digitSum % 10 ? digitSum % 10 : 0;
      sumArray[index] = digitSum;
    }
    for (index = Math.abs(smallest - n2); index > 0; index--) {
      num2 = parseInt(arr2[index - 1]);
      digitSum = num2 + balance;
      balance = parseInt(digitSum / 10);
      digitSum = digitSum % 10 ? digitSum % 10 : 0;
      sumArray[index] = digitSum;
    }
    if (!balance) {
      sumArray.shift();
    } else sumArray[0] = balance;
    return sumArray;
  }

 console.log(factorial(25))