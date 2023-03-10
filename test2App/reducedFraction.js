function properFractions(n){
    //your code here
    let count =  0;
    for(let index = 1; index <= n; index ++){
        let coPrime = gcd(index, n)
        if(coPrime === 1){
            count +=1
            // console.log(index +'/'+ n)
        }
    }
    console.log(count);
    return count;
  }

function gcd(a, b){
    if (a == 0) return b;
    return gcd(b % a, a);
}

console.log(properFractions(500000003))