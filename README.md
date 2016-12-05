/**
 * 项目搭建 准备工作
 * @intro: 后台 node + express 
 * 前台：vue.js + webpack
 *
 */

 # 1、npm install -g express // 全局安装express 框架， express- V查看安装的版本

 # 2、express -e ejs projectName  // 使用express 创建一个ejs 项目

 	package.json
	"dependencies": {
	    "body-parser": "~1.15.1",   //nodejs中间键， 用来处理json, raw , text, Url 编码数据 
	    "cookie-parser": "~1.4.3",  // 解析cookie的工具， 通过req.cookies可以取到传过来的cooki, （json）
	    "debug": "~2.2.0",
	    "ejs": "~2.4.1",
	    "express": "^4.13.4",
	    "morgan": "~1.7.0",
	    "serve-favicon": "~2.3.0"
	},

	npm install 初始化一下安装依赖
 # 3、npm install express -save  //安装express到项目依赖中

 # 4、npm install multer -save  //multer- node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。



 #session的本质使用cookie来实现。
原理大概是：http 带来服务端提前设置 cookie，服务端拿到标示用户身份的cookie, 再去固定地点（数据库，文件）检索出对应的用户身份。把身份赋值给本次请求的request,在程序处理中就知晓了用户的身份了。（在PHP,ASP或者其他服务端语言中都自动帮你实现了.虽然session与cookie是分开保存的.但是session中的数据经过加密处理后默认保存在一个cookie中.因此在使用session中间件之前必须使用cookieParser中间件.
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(express.session([options]));

options:{
	key:字符串,用于指定用来保存session的cookie名称,默认为coomect.sid.
	store:属性值为一个用来保存session数据的第三方存储对象.
	fingerprint:属性值为一个自定义指纹生成函数.
	cookie:属性值为一个用来指定保存session数据的cookie设置的对象,默认值为{path:”/”,httpOnly:true,maxAge:14400000}.
	path是cookie保存路径.httpOnly是否只针对http保存cookie,
	maxAge用于指定cookie的过期时间,单位为毫秒.
	secret:字符串.用来对session数据进行加密的字符串.这个属性值为必须指定的属性.
}

在使用了session中间件后,代表客户端请求的http.IncomingMessage对象就具有了一个session属性.该属性保存了所有session数据.


# 在使用session时报错：connection strategy not found
#修改配置文件如下解决
app.use(session({
    name: settings.key,
    store: new MongoStore({
        db: settings.db,
        url: settings.url
    }),
    cookie: {maxAge: 8000},
    secret: settings.cookieSecret,
}));