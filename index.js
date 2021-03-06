/*jslint node: true */
'use strict';

function XBMC (config) {
  if (config) this.config(config);
  else this._config = { host: '127.0.0.1:8080', image: null, title: 'xbmc-notify' };
}

XBMC.prototype.post = require ('post-json');

XBMC.prototype.config = function (obj) {
    if (obj) {
      for (var key in obj) { this._config[key] = obj[key]; }
       }
    return this._config;
};

XBMC.prototype.notify = function (msg,title,image,callback) {

  if (!callback) callback = function () {};
  var params = {
    title : title || this._config.title,
    message   : msg || this._config.message,
    image   : image || this._config.image
  };

  var json = { jsonrpc: "2.0", method: "GUI.ShowNotification", params: params, id: 1 };
  var uri = "http://" + this._config.host + '/jsonrpc';
  this.post(uri, json, callback);

};

module.exports = new XBMC();
