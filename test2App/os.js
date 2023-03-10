const { cp } = require('fs');
var os = require('os');
var path = require('path');

const cpu = os.cpus()
// console.log(cpu, os.networkInterfaces());
var filename = path.parse('/Users/Refsnes/demo_path.js');
console.log(filename);
