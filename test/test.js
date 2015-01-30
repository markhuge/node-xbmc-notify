/*jshint expr: true*/

var mocha  = require('mocha'),
    expect = require('chai').expect,
    xbmc   = require('../index.js'),
    sinon  = require('sinon');


describe('XBMC Notify', function () {

  it('Config returns expected defaults', function (done) {
    var config = xbmc.config();
    expect(config).to.have.deep.property('host','127.0.0.1:8080');
    expect(config).to.have.deep.property('title','xbmc-notify');
    expect(config.user).to.not.be.ok;
    expect(config.pass).to.not.be.ok;
    expect(config.image).to.not.be.ok;
    done();
  });

  it('Config accepts new parameters', function (done) {
    var config = xbmc.config({
      host  : '1.2.3.4:9090',
      user  : 'testuser',
      pass  : 'testpass',
      image : 'testimage',
      title : 'testTitle'
    });

    expect(config).to.have.deep.property('host','1.2.3.4:9090');
    expect(config).to.have.deep.property('user','testuser');
    expect(config).to.have.deep.property('pass','testpass');
    expect(config).to.have.deep.property('image','testimage');
    expect(config).to.have.deep.property('title','testTitle');

    done();
  });


  it('Send notification with defaults', function (done){
    var msg = 'this is a msg';

    buildStub(msg, 'testimage', 'testTitle');

    xbmc.notify(msg);
    done();
  });

  it('Send notification', function (done){
    var msg = 'this is a msg',
        title = 'Title',
        image = 'http://path/to/image';

    buildStub(msg, image, title);

    xbmc.notify(msg, title, image,function(err,res){
      expect(err).to.not.be.ok;
      expect(res).to.have.deep.property('statusCode',200);
      done();
    });

  });

});

function buildStub(msg, image, title){
  //clear out previous stub if it exists
  if (xbmc.post.restore){
    xbmc.post.restore();
  }

  sinon.stub(xbmc,'post', function (uri,json,callback) {
    expect(json.params).to.have.property('image', image);
    expect(json.params).to.have.property('title', title);
    expect(json.params).to.have.property('message', msg);
    if (callback){
      callback(undefined,{statusCode: 200});
    }
  });

}
