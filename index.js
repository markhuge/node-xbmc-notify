/*jslint node: true */
'use strict';
var post = require ('post-json');


function post (data) {}

function XBMC (config) {
  if (config) this.config(config);
  else this._config = { host: '127.0.0.1:8080', image: null, title: 'xbmc-notify' };
}

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
    message   : msg || this._config.message
  };
  
  if (image) params.image = image;

  var json = { jsonrpc: "2.0", method: "GUI.ShowNotification", params: params, id: 1 };
  var uri = "http://" + this._config.host + '/jsonrpc';
  post(uri, json, callback);

};

module.exports = new XBMC();
