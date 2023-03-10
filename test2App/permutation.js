// function permutations(string) {
//   const set = new Set();
//   let permutation = stringPermutation(string);
//   permutation.forEach((element) => {
//     set.add(element);
//   });
//   console.log(set);
//   return set;
// }

// function stringPermutation(s) {
//   if (s.length <= 2) return s.length === 2 ? [s, s[1] + s[0]] : [s];
//   return s
//     .split("")
//     .reduce(
//       (acc, letter, i) =>
//         acc.concat(
//           stringPermutation(s.slice(0, i) + s.slice(i + 1)).map(
//             (val) => letter + val
//           )
//         ),
//       []
//     );
// }


const permutations = (str) => {
   if (!!str.length && str.length < 2 ){
      return str
   }
   const arr = [];
   for (let i = 0; i < str.length; i++){
      let char = str[i]
      if (str.indexOf(char) != i)
         continue
         let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
         for (let permutation of permutations(remainder)){
            arr.push(char + permutation)
         }
   }
   return arr
}

console.log(permutations("aabb"));
