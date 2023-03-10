function orderWeight(string) {
    let weightArray = (string.split(' ').sort());
    weightArray.map(element => parseInt(element))
    let digSum = [];
    for (let element of weightArray){ 
        let number = element;
        let sum = 0;
        while(element > 0){
            sum += element % 10;
            element = parseInt(element/10);
        }
        digSum.push({first:sum, second:number});
    }
    digSum.sort((a,b) => (a.first > b.first) ? 1 : ((b.first > a.first) ? -1 : 0))
    return (digSum.map(x => { return x.second })).join(' ').toString(); 
}

const result = orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");
console.log(result)