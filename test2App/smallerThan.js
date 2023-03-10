function smaller(arr) {
    //==========================
    // let result = [];
    // console.log(arr);
    // const resultArray = arr.map((element, i) => {
    //     return arr.slice(i).filter(num => num < element).length
    // });
    // console.log(resultArray);
    // return resultArray;
    //===========================
    let arr2 = [...arr];
    arr2.sort()
    console.log(arr2, arr)
    const result = arr.map((element) =>{ return (arr2.slice(0, (arr2.indexOf(element)))).length})
//    return result;
    let digit = 8;
   console.log(digit.toString(3))

}

console.log(smaller([1, 1, -1, 0, 0]))