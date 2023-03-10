function rgb(r, g, b){
    let arr = [r,g,b];
    let result = [];
    for(let r of arr){
        if(r > 255) {r = 255}
        if(r < 0 ){  r = 0}
        result.push(hexaDecimal(r));
    } 
    final = result.map(number =>{
       return  number <= 9 ? "0"+number : number
    })
    return final[0]+final[1]+final[2]
  }

  function hexaDecimal(N){
    let hexStr = N.toString(16).toUpperCase();
    if(['A', 'B', 'C', 'D', 'E', 'F'].includes(hexStr)) return "0"+hexStr;
    else return hexStr;
  }

console.log(rgb(58,298,10));