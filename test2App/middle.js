function getMiddle(s)
{
 if(!s){
    return ''
 }
  let n = parseInt(s.length / 2);
  console.log(n);
  return ((s.length) % 2 === 0) ?  s[n-1]+s[n] : s[n];
}

const result = getMiddle('');
console.log(result);