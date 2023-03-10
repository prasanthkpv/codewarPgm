function mix(s1, s2) {
    let smallCase = [...'abcdefghijklmnopqrstuvwxyz'];
    for (let letter of [...s1]){
        if(!smallCase.includes(letter)){
            s1 = s1.replace(letter, '');
        }
    }
    for (let letter of [...s2]){
        if(!smallCase.includes(letter)){
            s2 = s2.replace(letter, '');
        }
    }
    s1Array = s1.split('');
    s2Array = s2.split('');
    let s1Count = characterCount(s1Array);
    let s2Count = characterCount(s2Array);
    // console.log(s1Count, s2Count);
    let i = 0;
    let j = 0;
    let finalObject = [];
    while(i < s1Count.length && j < s2Count.length){    
        let leftChar = Object.keys(s1Count[i])[0];
        let leftCount = Object.values(s1Count[i])[0];
        let rightChar = Object.keys(s2Count[j])[0];
        let rightCount = Object.values(s2Count[j])[0]; 
        if(leftChar === rightChar){
                if((leftCount > rightCount) && leftCount > 1){
                    finalObject.push({'char':leftChar, 'source':'1', 'count':leftCount});
                    i +=1;j +=1;
                    // console.log(leftChar, leftCount, rightChar, rightCount, i, j);
                }
                else if(leftCount < rightCount && rightCount > 1){
                    finalObject.push({'char':rightChar, 'source':'2', 'count':rightCount});
                    i +=1;j +=1;
                    // console.log(leftChar, leftCount, rightChar, rightCount, i, j);
                }
                else if(leftCount === rightCount && leftCount > 1){
                    finalObject.push({'char':leftChar, 'source':'=', 'count':leftCount});
                    i +=1;j +=1;
                    // console.log(leftChar, leftCount, rightChar, rightCount, i, j);
                }
                else if(leftCount === rightCount && leftCount === 1){
                    i +=1; j +=1;
                    // console.log(leftChar, leftCount, rightChar, rightCount, i, j);
                }
                else{
                    i +=1; j +=1;
                    // console.log(leftChar, leftCount, rightChar, rightCount, i, j);
                }
                // else if(rightCount > 1){
                //     finalObject.push({'char':rightChar, 'source':'2', 'count':rightCount});
                // }
                
               
            }
        else if (leftChar < rightChar){
            if(leftCount > 1){
                finalObject.push({'char':leftChar, 'source':'1', 'count':leftCount});
            }
            i +=1;
        }
        else if(leftChar > rightChar){
            if(rightCount > 1){
                finalObject.push({'char':rightChar, 'source':'2', 'count':rightCount});
            }
            j +=1;
        }
        // console.log(finalObject);
    }
    while(i < s1Count.length){
        let leftChar = Object.keys(s1Count[i])[0];
        let leftCount = Object.values(s1Count[i])[0];
        if(leftCount > 1){
            finalObject.push({'char':leftChar, 'source':'1', 'count':leftCount});
            // console.log(leftChar, leftCount, rightChar, rightCount, i);
        }
        i +=1;
    }
    while(j < s2Count.length){
        let rightChar = Object.keys(s2Count[j])[0];
        let rightCount = Object.values(s2Count[j])[0];
        if(rightCount > 1){
            finalObject.push({'char':rightChar, 'source':'2', 'count':rightCount});
            // console.log(leftChar, leftCount, rightChar, rightCount, j);
        }
        j +=1;
    }
    let finalStr = '';
    
    if(finalObject.length === 0){
        return '';
    }
    finalObject.sort((objA, objB) => objB.count - objA.count || (objA.source + objA.char > objB.source + objB.char ? 1 : -1))
    for (let member of finalObject){
        let source = member['source'];
        let char = member['char'];
        let count = member['count'];
        finalStr = finalStr+source+':'+char.repeat(count)+'/';
    }
    return finalStr.slice(0, finalStr.length-1);
  }


  function characterCount(str){
    str.sort();
    let count = 1;
    let strCountObj = [];
    for(let index = 0; index<str.length;index++){
            while(str[index] === str[index+1]){
                count +=1;
                index +=1;
            }
            strCountObj.push({[str[index]]:count});
            count = 1;
        }
    return strCountObj;
  }


s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
console.log(mix("Are they here", "yes, they are here"))