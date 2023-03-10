function persistence(num) {
    let count = 0;
    let partialValue = num;
    while(partialValue > 9){
        let digitProduct = 1;
        while(num > 9){
            digitProduct *= (num % 10);
            num = parseInt(num / 10);
        }
        digitProduct *= num;
        count +=1;
        partialValue = digitProduct;
        num = partialValue;
    }
    return count;
 }

 console.log(persistence(999));