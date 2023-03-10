var numerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  
  RomanNumerals = {
    toRoman: function(v) {
      var s = '';
      numerals.forEach(function(n) {
        while (v >= n[1]) {
          s += n[0];
          v -= n[1]; 
        }
      });
      return s;
    },
    fromRoman: function(s) {
      var v = 0;
      numerals.forEach(function(n) {
        while (s.substr(0, n[0].length) == n[0]) {
          s = s.substr(n[0].length);
          v += n[1];
        }
      });
      return v;
    }
  };

//   const romanLetter = RomanNumerals;
console.log(RomanNumerals.toRoman(1990));