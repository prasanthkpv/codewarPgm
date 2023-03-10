function findOutlier(integers){
    const checkType = checkArray(integers[0], integers[1], integers[2]);
    console.log(checkType);
    for (let number of integers){
        if(number % 2){
            if(checkType ==='even')
                return number;
            else continue;
        }
        else {
            if(checkType === 'odd'){
                return number;
            }
            else continue;
        }
    }
  }

  function checkArray(first, second, third){
    if(first % 2){
        if(second % 2)
            return 'odd';
        else {
            
            if(third % 2) { 
                console.log('odd');
                return 'odd';
            }
            else {
                console.log('even'); 
                return 'even';} 
            }
    }else{
        if(second % 2){
            if(third % 2) {return 'odd';}
            else { return "even"; }
        }
        else { return 'even';}
    }
}

const number = findOutlier([1, 4, 5, 7])
console.log(number);