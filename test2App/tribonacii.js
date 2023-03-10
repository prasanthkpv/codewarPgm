function tribonacci(signature,n){
    //your code here
    let tribonacciSeries = []
//     for(let index = 1; index <= n; index ++){
//         tribonacciSeries.push(nthTribonaci(signature, index));
//     }
// //    console.log(tribonacciSeries);
//    return tribonacciSeries;
//   }

//   function  nthTribonaci(signature, n){
//     if( n == 1) return signature[0];
//     else if(n == 2) return signature[1];
//     else if (n == 3) return signature [2];
//     else return nthTribonaci(signature, n - 1) + nthTribonaci(signature, n-2) + nthTribonaci(signature, n-3); 
//   }
for(let index = 1; index <= n; index++){
    if(index === 1) tribonacciSeries.push(signature[0]);
    else if(index === 2) tribonacciSeries.push(signature[1]);
    else if(index === 3) tribonacciSeries.push(signature [2]);
    else {
         let a = tribonacciSeries[index-2];
         let b = tribonacciSeries[index-3];
         let c = tribonacciSeries[index-4];
         tribonacciSeries.push(a + b + c);
    }
  }
  return tribonacciSeries;
}

 console.log(tribonacci([1,1,1],10));