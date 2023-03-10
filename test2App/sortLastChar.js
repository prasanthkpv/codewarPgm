function last(x){
    let strArray = x.split(' ');
    strArray.sort((a,b) => {a.split('').pop() - b.split('').pop()});
    console.log(strArray);
    let strObject = [];
    strArray.forEach((element) =>{
        strObject.push({last:[...element].pop(), element});
    });
    strObject.sort((a, b) => {
        const nameA = a.last.toUpperCase(); // ignore upper and lowercase
        const nameB = b.last.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    strArray = [];
    strObject.map((element) =>{ strArray.push(element.element)})
    return strArray;
}

console.log(last('man i need a taxi up to ubud'))