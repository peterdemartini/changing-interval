changingSetInterval = require('../../lib/interval');

describe('changingSetInterval', function(){
  beforeEach(function(){
    global.setTimeout = sinon.stub().yields();
  });
  it('should be a function', function(){
    expect(changingSetInterval).to.be.a('function');
  });

  describe('when called without anything', function(){
    it('should throw an error', function(){
      expect(changingSetInterval).to.throw(Error);
    });
  });

  describe('when called correctly', function(){
    var callback, intervalCallback, sut, callbackWrapper;
    beforeEach(function(){
      callback = sinon.spy();
      intervalCallback = function(){
        return 10;
      };
      callbackWrapper = function(){
        callback();
      };
      sut = changingSetInterval(callback, intervalCallback, callbackWrapper);
    });

    it('should call setTimeout', function(){
      expect(global.setTimeout).to.have.been.calledWith(sut.callbackWrapper, 10);
    });

    it('should call the callback', function(){
      expect(callback).to.have.been.called;
    });
  });

  describe('when called correctly and with a different timeout interval', function(){
    var callback, intervalCallback, sut, callbackWrapper;
    beforeEach(function(){
      callback = sinon.spy();
      intervalCallback = function(){
        return 50;
      };
      callbackWrapper = function(){
        callback();
      };
      sut = changingSetInterval(callback, intervalCallback, callbackWrapper);
    });

    it('should call setTimeout', function(){
      expect(global.setTimeout).to.have.been.calledWith(sut.callbackWrapper, 50);
    });

    it('should call the callback', function(){
      expect(callback).to.have.been.called;
    });
  });

  describe('when called correctly and with a different null interval', function(){
    var callback, intervalCallback, sut, callbackWrapper;
    beforeEach(function(){
      callback = sinon.spy();
      intervalCallback = function(){
        return null;
      };
      callbackWrapper = function(){
        callback();
      };
      sut = changingSetInterval(callback, intervalCallback, callbackWrapper);
    });

    it('should call setTimeout', function(){
      expect(global.setTimeout).to.not.have.been.called;
    });
  });

  describe('when called correctly and with a different undefined interval', function(){
    var callback, intervalCallback, sut, callbackWrapper;
    beforeEach(function(){
      callback = sinon.spy();
      intervalCallback = function(){
        return undefined;
      };
      callbackWrapper = function(){
        callback();
      };
      sut = changingSetInterval(callback, intervalCallback, callbackWrapper);
    });

    it('should call setTimeout', function(){
      expect(global.setTimeout).to.not.have.been.called;
    });
  });

  describe('when called correctly and with a different false interval', function(){
    var callback, intervalCallback, sut, callbackWrapper;
    beforeEach(function(){
      callback = sinon.spy();
      intervalCallback = function(){
        return false;
      };
      callbackWrapper = function(){
        callback();
      };
      sut = changingSetInterval(callback, intervalCallback, callbackWrapper);
    });

    it('should call setTimeout', function(){
      expect(global.setTimeout).to.not.have.been.called;
    });
  });

  describe('when called correctly and with a 0 interval', function(){
    var callback, intervalCallback, sut, callbackWrapper;
    beforeEach(function(){
      callback = sinon.spy();
      intervalCallback = function(){
        return 0;
      };
      callbackWrapper = function(){
        callback();
      };
      sut = changingSetInterval(callback, intervalCallback, callbackWrapper);
    });

    it('should call setTimeout', function(){
      expect(global.setTimeout).to.have.been.called;
    });
  });
});
