
// Node.js program to demonstrate the
// process.nextTick() Property
    
// Include process module
const process = require('process');
const fs = require('fs');
 
process.nextTick(() => {
  console.log('Executed in the next iteration');
});
 
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
console.log('Executed in the current iteration');