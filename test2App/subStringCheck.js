// function inArray(array1,array2){
//     let resultArray = [];
//     for (let element of array1){
//         for(let str of array2){
//             if(str.includes(element)){
//                 resultArray.push(element);
//                 break;
//             }
//         }
//     }
//     return resultArray.sort();
//   }

  function inArray(array1,array2){
    return array1.filter( e => array2.join(' ').includes(e) ).sort();
  }

  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

  a1 = ["livxze", "strong", "arp"]
const result = inArray(a1, a2);
console.log(result);