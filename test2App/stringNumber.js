function incrementString (strng) {
    let digits = [];
    let strArray = [...strng];
    let index = 0;
    for ( index = strArray.length-1; index >= 0; index --){

        if(parseInt(strArray[index]) <= 9 && 0 <= parseInt(strArray[index])){
            
            digits.push(strArray[index])
        }else{
            break;
        }
    }
    if(index === strArray.length-1){
        return strng+1;
    }
    let subString = strArray.splice(0, index+1).join('');
    digits = digits.reverse().join('');
    
    if(parseInt(digits) === 0){
        digits = digits.slice(0, digits.length-1)+'1'
    }else{
        console.log(digits)
        len = digits.length;
        modiDigits = parseInt(digits) + 1;
        if(len > modiDigits.toString().length){
            digits = digits.slice(0, (len - modiDigits.toString().length))+ modiDigits;
        }
        else digits = modiDigits;
    }
    return subString+digits;
  }

  console.log(incrementString("ll1"));
