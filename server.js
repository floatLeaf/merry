var http = require('http');
var app = require('./app');

http.createServer(app).listen(app.get('port'), function(){
  console.log('连接成功， 服务器端口号:', app.get('port'), __dirname);
})