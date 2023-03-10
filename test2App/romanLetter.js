
    let romanArray = [['I',1], ['IV',4],['V',5], ['IX',9], ['X',10], ['XL',40], ['L',50], ['XC',90], ['C',100],
    ['CD',400],['D',500],['CM',900], ['M',1000]];
       
    RomanNumerals = {
            toRoman: function(N){
            let finalRoman = '';
            romanArray = romanArray.reverse();
            for (let member of romanArray){
                while(N >= member[1]) {
                     finalRoman += member[0];
                     N -= member[1]; 
                }
                // console.log(finalRoman);
        }
        return finalRoman;
    },
    
        fromRoman: function(M){
            let N = [...M].length;
            let index = 0;
            let decimal = 0;
            while(index < N){
                let letter = [...M][index];
                let letterNext = [...M][index+1];
                let letterVaue = 0;
                let letterNextValue = 0;
                for(let member of romanArray){
                    if(letter === member[0]){
                        letterVaue = member[1];
                    }
                    if(letterNext === member[0]){
                        letterNextValue = member[1];
                    }
                }
                if(letterVaue < letterNextValue){
                    letter +=letterNext;
                    index +=1;
                    for(let member of romanArray){
                        if(letter === member[0]){
                            letterVaue = member[1];
                        }
                    }
                }
                decimal += letterVaue;
                index +=1;  
            }
        return decimal;
    }
}
// function toRoman(N){
//     return RomanNumerals.toRoman(N);
// }
// const romanLetter = RomanNumerals();
console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.fromRoman('X'));
// console.log(toRoman(N));
// function fromRoman(M){ 
//     return RomanNumerals.fromRoman(M);
// }

// console.log(toRoman(1000))
// console.log(fromRoman(M));