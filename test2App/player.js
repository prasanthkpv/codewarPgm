function openOrSenior(data){
    let outputData = [];
    for(let member of data){
        if((member[0]>=55) && (member[1] >= 7)){
            outputData.push('Senior');
        }
        else{
            outputData.push('Open');
        }
    }
    return outputData;
  }

 const result =  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
 console.log(result);