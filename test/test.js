/*jshint expr: true*/

var mocha  = require('mocha'),
    expect = require('chai').expect,
    xbmc   = require('../index.js');

describe('XBMC Notify', function () {

  it('Config returns expected defaults', function () {
    var config = xbmc.config();
    expect(config).to.have.deep.property('host','127.0.0.1:8080');
    expect(config.user).to.not.be.ok;
    expect(config.pass).to.not.be.ok;
    expect(config.image).to.not.be.ok;
  });

  it('Config accepts new parameters', function (done) {
    var config = xbmc.config({
      host  : '1.2.3.4:9090',
      user  : 'testuser',
      pass  : 'testpass',
      image : 'testimage'
    });

    expect(config).to.have.deep.property('host','1.2.3.4:9090');
    expect(config).to.have.deep.property('user','testuser');
    expect(config).to.have.deep.property('pass','testpass');
    expect(config).to.have.deep.property('image','testimage');

    done();
  });

  it('Send notification', function (done){
    xbmc.notify('this is a msg');

    done();
  });

});
