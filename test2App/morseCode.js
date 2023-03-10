const qs = require(querystring)

var q = qs.parse('year=2017&month=february');
console.log(q.year);
decodeMorse = function(morseCode){
  console.log(morseCode)
  morseCode = morseCode.trim()
  let final = morseCode.split('   ').map(a => a.split(' ').map(b => MORSE_CODE[b]).join('')).join(' ');
  console.log(final.toUpperCase())
  return final.trim().toUpperCase();
}
  
  var decoded = decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ');
  console.log(decoded);
  