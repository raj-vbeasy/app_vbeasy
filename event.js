const myEmitter = require('events');
class MyEmit extends myEmitter{}
const myemit = new MyEmit();
myemit.on('waterfull',()=>{
    setTimeout(()=>{
        console.log('please turn off the motor water tank is full');
    },2000);
});
myemit.emit('waterfull');