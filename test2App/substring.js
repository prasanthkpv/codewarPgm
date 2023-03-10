function solution(str, ending){
    return str.includes(ending, str.length-ending.length) ? true : false
  }

  const result = solution('', 'pkumar');
  console.log(result);