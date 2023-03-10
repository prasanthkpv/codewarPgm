function countOnes(left, right) {
  let oneCount = 0;
  for (index = left; index <= right; index++) {
    oneCount += index
      .toString(2)
      .split("")
      .reduce((acc, intial) => {
        return parseInt(acc) + parseInt(intial);
      });
    //   oneCount += index.toString(2).split('1').length-1
    //   console.clear();
  }
  return oneCount;
}

console.log(countOnes(82445, 597667)); //80873, right: 990212
