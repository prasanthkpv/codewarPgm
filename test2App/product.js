function removeNb (n) {
    let sum = (n * (n +1)) / 2; 
    let result = [];
    for (let first =1; first < n; first ++){
        let second  = (sum - first ) / (first + 1);
        if(second <= n && Number.isInteger(second)){
            result.push([first, second]);
        }
    }
    return result; 
}

console.log(removeNb (26))