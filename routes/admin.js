var express = require('express');
var router = express.Router();
var Shoot = require('../modules/Shoot');
var weddingShoot = new Shoot();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*
 * 添加商品
 * res.render(file,option)是express中专门渲染视图用的，
 */
router.get('/addGoods', function(req, res, next) {
	res.render('addGoods', {});
})

router.post('/addGoods', function(req, res, next) {
	var condition = req.body;
	weddingShoot.save(condition, function(error, doc){
		if (error) {
			res.redirect('/error');
		} else {
			res.redirect('/success');
		}
	})

})
module.exports = router;
