function toCamelCase(str){
    if(!str){
        return ''
    }
    else{
    let stringArray = str.split(/[-_]/);
    let finalWords = [stringArray[0]]
    for (let index = 1; index < stringArray.length; index++){
      let word = stringArray[index];
    finalWords.push(word[0].toUpperCase() + word.slice(1));
    }
    return finalWords.join("");
    }
  }

  toCamelCase('the_ok_input');