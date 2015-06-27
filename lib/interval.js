function changingSetInterval(callback, intervalCallback, callbackWrapper){
  var self = this;
  if(typeof callback !== 'function'){
    throw Error('A callback must be set on the interval');
  }
  if(typeof intervalCallback !== 'function'){
    throw Error('A callback interval must be set on the interval');
  }
  self.callbackWrapper = callbackWrapper || function(){
    callback()
    createTimeout()
  };
  function clearEverything(){
    clearTimeout(self.id);
    self.id = null;
  }
  function createTimeout(){
    var interval = intervalCallback();
    if(typeof interval === 'undefined' || interval === null || interval === false){
      return;
    }
    self.id = setTimeout(self.callbackWrapper, interval);
  };
  createTimeout();
  self.clear = clearEverything;
  return self;
}



module.exports = changingSetInterval
