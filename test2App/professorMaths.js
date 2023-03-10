function doubles(maxk, maxn) {
    // your code
    let finalValue = 0;
    for(let k = 1; k <= maxk; k++){
        for(let n = 1; n <= maxn; n++){
            finalValue += (1 / (k * Math.pow(n + 1, (2 * k))))
        }
    }
    return finalValue;
}





console.log(doubles(1502, 17009066));