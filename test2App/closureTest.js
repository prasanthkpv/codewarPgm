// console.log(x)
// function sum(){
//     console.log(x)
//     var x = 1;
// }
// sum()
// var x = 1;
{
  console.log(x); // ReferenceError
  var x = 2;
}

// const e = 10;
// function sum(a){
//     return function sum1(b){
//         return function sum2(c){
//             return function sum3(d) {
//                 return a + b + c + d + e;
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4))

// function grandParent() {
//     var house = 'GreenHouse';
//     function parent() {
//         var car = 'Tesla';
//         house = 'YellowHouse';
//         function child() {
//             var scooter = 'Vespa';
//             console.log('I have:', house, car, scooter);
//         }

//         return child;
//     }

//     return parent;
// }
// var legacyGenX = grandParent();
// console.log(typeof(legacyGenX)); //legacyGenX is of type function
// var legacyGenY = legacyGenX();
// // console.log(typeof(legacyGenY)); //legacyGenY is of type function
// legacyGenY();
// // console.log(legacyGenX());

// const testClosure = (function () {
//     var privateNmber = 1;
//     function modifyValue (value){
//         privateNmber = privateNmber + value;
//         // console.log(privateNmber);
//         }
//     // console.log(privateNmber);
//     return {
//         increment(value){
//             modifyValue(value)
//             // console.log(privateNmber);
//             return privateNmber;
//     },
//         decrement (value){
//             modifyValue(value)
//             return privateNmber;
//     }
//     }
// });

// const closureTest = testClosure();

// console.log(closureTest.increment(2));
// console.log(closureTest.decrement(-1));
