function findUniq(arr) {
   sortArary = arr.sort();
   let N = sortArary.length;
   let last = sortArary[-1];
   console.log(sortArary);
   console.log(sortArary[0], sortArary[N-2], sortArary[N-1])
   if(sortArary[0] === sortArary[N-2]){
    
    return sortArary[N-1];
   }
   else return sortArary[0];
  }

  const result = findUniq([ 1, 0, 0 ]);
  console.log(result);
  