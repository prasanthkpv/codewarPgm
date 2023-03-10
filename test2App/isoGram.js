function isIsogram(str){
    strArray = [...str];
    for(let index= 0; index < strArray.length; index++){
        let letter = strArray[index].toLowerCase();
        console.log(letter);
        if(str.toLowerCase().includes(letter, index +1)) return false; 
    }
    return true
  }

const result = isIsogram("moose");
console.log(result);