function middlePermutation(s) {
  const permutationArray = stringPermutation(s);
  // console.log(JSON.stringify(permutationArray));
  permutationArray.sort();
  let middle = parseInt((permutationArray.length - 1) / 2);
  // console.log(middle, permutationArray[middle - 1], permutationArray[middle], permutationArray[middle+1])
  // console.log(permutationArray.indexOf('cxgdba'))
  return permutationArray[middle];
}

function stringPermutation(s) {
  if (s.length <= 2) return s.length === 2 ? [s, s[1] + s[0]] : [s];
  return s
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutation(s.slice(0, i) + s.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
}

console.log(middlePermutation("jyae"));
