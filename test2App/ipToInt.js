function ipToInt32(ip){
    //...
    let ipArray = ip.split('.')
    console.log(ipArray)
    let stringIpBase2 =''
    ipArray.forEach(element=>{
        let binary = String(Number(element).toString(2))
        let i = 0
        let N = binary.length;
        element = ''
        while(i < (8 - N)){
            element +='0'
            i +=1;
        }
        element += binary
        stringIpBase2 += element
    })
    return parseInt(stringIpBase2, 2)
  }

  console.log(ipToInt32("128.32.10.1"))  //,2149583361