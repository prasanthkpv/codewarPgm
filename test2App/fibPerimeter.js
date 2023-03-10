function perimeter(n) { 
    let sum = 0
    while(n+1 !== 0){
        sum += fib(n);
        console.log(sum);
        n -= 1;
    }
    return (4 * sum);
}

function fib(m) {
    if(m === 0 ) return 1;
    if(m === 1) return 1;
    else return fib(m-1) + fib(m-2);
}

const result = perimeter(58);
console.log(result);