const event = require('events');
const eventEmitter = new event.EventEmitter()

eventEmitter.on('event', function(a, b){
  console.log(a, b, this);
  // Prints:
  //   a b MyEmitter {
  //     _events: [Object: null prototype] { event: [Function (anonymous)] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined,
  //     [Symbol(kCapture)]: false
  //   } true
});
eventEmitter.emit('event', 'c', 'd');
eventEmitter.emit('event', 'a', 'b');
