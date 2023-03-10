function pigIt(str){
    let pigWord='';
    const regex = new RegExp(/["!,{}\[\]()?.:;&]/);
    pigWord = str.split(' ').map(word => {
        if(regex.test(word)){
            console.log(word);
            return word;
        }
       return pigWord+word.slice(1)+word[0]+'ay'; 
    }).join(" ");
    return pigWord;
  }

  console.log(pigIt('Pig latin is ! cool'));