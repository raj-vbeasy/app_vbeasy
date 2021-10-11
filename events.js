const event = require('events');
class Myemit extends event{}
const myEmit = new Myemit();
myEmit.on('waterfull',(req,res)=>{
    setTimeout(()=>{
        console.log('water tank is full please turn off the motor');
    },2000);
});
myEmit.emit('waterfull');