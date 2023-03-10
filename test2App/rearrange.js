function nextBigger(n){
    console.log(n)
    //your code here
    // numberArray = (String(n).split("").reverse().map(Number)).reverse();
    // console.log(numberArray);
    let value = [];
    let numberArray = (String(n).split("").reverse().map(Number)).reverse();
    
    for(let index = 0; index < numberArray.length -1;index++){
        let m = n;
        let temp = numberArray[index];
        numberArray[index]=numberArray[index+1];
        numberArray[index+1]=temp;
        let tempValue = parseInt(numberArray.join(''));
        value.push(tempValue);
        numberArray = (String(m).split("").reverse().map(Number)).reverse();
        // console.log((value));
    }
    value.push(n);
    console.log(value.sort());
    let final = value[value.length-1];
    let valueIndex = value.indexOf(n);
    console.log(valueIndex);
    if(valueIndex === -1){
        return -1;
    }
    else if(n === final){
        return -1;
    }
    else{ 
        for(let index = valueIndex; valueIndex < value.length-1; valueIndex++){
            if(value[valueIndex] !== value[valueIndex+1]){
                return value[valueIndex+1];
            }
        }
    }
  }

  console.log(nextBigger(1234567890))