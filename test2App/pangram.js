function isPangram(string){
   let strArray = string.toLowerCase().split('');
   var letters = [...'abcdefghijklmnopqrstuvw']
   for(let letter of letters){
       if(strArray.includes(letter)){
        continue;
       }
       else {
         console.log('No');
         return false;
       }
   }
   return true;
  }

const result = isPangram('');
console.log(result);