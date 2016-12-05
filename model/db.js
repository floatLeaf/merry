var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/vuedb');
var Schema = mongoose.Schema;

/**
 * 婚拍表
 * @parmas name: 婚拍名 tem_id: 团队列表  destination: 目的地  tag: 小标签
 * @parmas cover_img: 封面图片 slide_img: 轮播图
 */
var weddingshootSchema = new Schema({
	name:       {type: String, default: ''},
	team_id:    {type: Number},
	destinatio: {type: String, default: ''},
	tag:        {type: Object, default: {}},
	cover_img:  {type: String},
	slide_img:  {type: Object, default: {}}
},{
	collection: "weddingshoot",
	versionKey: false
});



db.connection.on('error', function(){
	console.log('连接错误');
});

db.connection.on('open', function(){
	console.log('数据库连接成功');
});

exports.weddingshoot = db.model('weddingshoot', weddingshootSchema);