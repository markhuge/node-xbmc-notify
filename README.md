node-xbmc-notify [![Build Status](https://travis-ci.org/markhuge/node-xbmc-notify.svg)](https://travis-ci.org/markhuge/node-xbmc-notify) [![Code Climate](https://codeclimate.com/github/markhuge/node-xbmc-notify.png)](https://codeclimate.com/github/markhuge/node-xbmc-notify) ![Dependency Status](https://gemnasium.com/markhuge/node-xbmc-notify.svg) [![Coverage Status](https://img.shields.io/coveralls/markhuge/node-xbmc-notify.svg)](https://coveralls.io/r/markhuge/node-xbmc-notify)
================

> Send notifications to your XBMC from Node.js

It looks like  my [slightly bulkier project](https://github.com/markhuge/xbmc-shiznaz-supreme) is being used almost exclusively for XBMC notifications. If that's the case, I'd rather release a more lightweight version that does only that.


### Install:

`npm install xbmc-notify`

### TL;DR Usage:

```Javascript
var xbmc = require('xbmc-notify');

// Optional config
xbmc.config({
  host     : "<xbmc host>:<port>",   //defaults to 127.0.0.1:8080
  user     : "<xbmc user>",          //defaults to null
  password : "<xbmc password>"       //defaults to null
  title    : "<msg title>"           //defsults to 'xbmc-notify'
  image    : "<optional image URI>"  //defaults to null
});


xbmc.notify("This is a title", "This is a message", "<optional image URI>");
```

### Methods

#### `.config(<config object>)`

This is an optional configuration object with the following properties:

- host - XBMC host and port
- user - XBMC user
- password - XBMC password
- image - Default image icon for all notifications. Will apply to all notifications unless overwritten.
- title - Default title for all notifications. Will apply to all notifications unless overwritten.
- message - Default msg for all notifications. Will apply to all notifications unless overwritten.

#### `.notify(<msg>,[title],[image URI],callback)`
- title - Notification title
- msg - Notification message
- image URI - optional image URI
- callback - returns (<error>,<response object>)