function createPhoneNumber(numbers){
  let str = numbers.join('')
  sliceArray = '(' + str.substring(0, 3 )+') ' + str.substring(3, 6) + '-'+str.substring(6,12);
  // console.log(sliceArray);
  return sliceArray;
}

createPhoneNumber([1,2,3,4,5,5,6,7,7,8,0])