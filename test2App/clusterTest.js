var cluster = require('cluster');

if (cluster.isWorker) {
  console.log(`I am a worker:${process.pid}`);
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
}
if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
} 
if (cluster.isMaster) {
    console.log(`I am a Master: ${process.pid}`); 
}

var buf = Buffer.alloc(20);
console.log(buf.length);
buf.write('abc');
console.log(buf.toString('hex'))
console.log(buf.toString('binary'))