var shoot = require('../model/db').weddingshoot;
var Common = require('./Common');

function Shoot () {}
Shoot.prototype = new Common(shoot);

module.exports = Shoot;