var express = require('express');
var router = express.Router();

/* 错误页面 */
router.get('/error', function (req, res, next) {
	res.render('error', {message: 'Error Info', path: ''});
})

/* 成功页面 */
router.get('/success', function (req, res, next) {
	
	res.render('success', {message: 'Success Info', path: ''});
})

module.exports = router;