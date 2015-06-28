var changingInterval = require('./index');
var interval = changingInterval(function(){
  // This will be called every interval
  // Code goes here
  console.log('Called');
}, function(){
  // this should return the interval
  var time = Math.round(Math.random() * 10) * 1000;
  console.log('time to be called', time);
  if(time > 5000) {
    console.log('ending');
    return;
  }
  return time;
  // return null or undefined or false to stop the interval
})

// To clear interval call or return null from the interval callback
// interval.clear();
