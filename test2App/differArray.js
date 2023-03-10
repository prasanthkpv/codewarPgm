function arrayDiff(a, b) {
  let result = [];
  a.forEach(element => {
    if(!b.includes(element)){
        result.push(element)
    }
  });
//   b.forEach(element =>{
//     if(!a.includes(element)){
//         result.push(element)
//     }
//   })
  console.log(result)
  return result
}

console.log(arrayDiff([1], [1, 2]))