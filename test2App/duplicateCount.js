function duplicateCount(str){
       let strArray = [...str.toLowerCase()].sort();
       console.log(strArray);
       let count = 0;
       for (let index = 0;index < strArray.length; index++){
            let letter = strArray[index];
            let flag =0;
            while(letter === strArray[index+1]){
                index +=1;
                flag = 1;
            }
            if(flag ===1) {count +=1;flag = 0;}
       }
       console.log(count);
       return count
}

console.log(duplicateCount('abcabcabc'))