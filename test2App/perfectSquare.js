function findNextSquare(sq) {
    if(checkPerfectSqaure(sq)){
        let i = 1;
        for(;;){
            nextSq = sq + i;
            // console.log(nextSq);
            if(checkPerfectSqaure(nextSq))
                return nextSq;
            i+=1;
        }
    }
    else return -1;
  }
  function checkPerfectSqaure(N){
    let sqrtN = Math.sqrt(N);
    if(typeof sqrtN == 'number' && !isNaN(sqrtN)){
        if (Number.isInteger(sqrtN)) {          
            return true;
        }
        else return false;
    }
  }

  const result = findNextSquare(121)
  console.log(result);