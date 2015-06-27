# Changing Interval

Changing setInterval for Node

Have you ever wanted to have an interval with a changing delay, well now you can.

## API

````
var changingInterval = require('changing-interval');
var interval = changingInterval(function(){
  // This will be called every interval
  // Code goes here
  console.log('Called');
}, function(){
  // this should return the interval
  return (Math.random() * 10) * 1000;
  // return null or undefined or false to stop the interval
})

// To clear interval call or return null from the interval callback
interval.clear();
````
