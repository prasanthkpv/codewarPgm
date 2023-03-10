function digitalRoot(n) {
    let sum=0;
    while(n / 10 > 0){
        sum += n % 10;
        n = parseInt(n / 10);
        // console.log(sum)
    }
    console.log(sum);
   return (sum <= 9) ? sum : digitalRoot(sum);
  }

// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
//   }

  const result = digitalRoot(19)
  console.log(result);
