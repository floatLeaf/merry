function Common (obj) {
	this.obj = obj;

	/**
	 * 查询数据库
	 * @params condition：查询条件｛｝， callback：回调函数
	 */
	this.find = function (condition, callback) {
		this.obj.find(condition, function (error, docs) {
			if (error) {
				callback(error);
			} else {
				callback(error, docs);
			}
			
	 	});
	}

	/**
	 * Model 保存数据
	 * @params condition：要保存的数据｛｝， callback：回调函数
	 */

	this.create = function (condition, callback) {
	 	this.obj.create(condition, function (error, docs) {
	 		if(error) {
	 			callback(error)
	 		}else {
	 			callback(error, docs)
	 		}
	 	});
	}

	 /**
	 * entity方法保存数据
	 * @params condition：要保存的数据｛｝， callback：回调函数
	 */

	this.save = function (condition, callback) {
	 	var Entity = new this.obj(condition);
	 	Entity.save(function (error, docs) {
	 		if(error) {
	 			callback(error);
	 		} else {
	 			callback(error, docs);
	 		}
	 	});
	}

	 /**
	 * 更新数据库
	 * @params condition：查询条件，update：要更新的数据｛｝， callback：回调函数
	 */

	this.update = function (condition, uodate, callback) {
	 	this.obj.update(condition, update, function (error) {
	 		if(error) {
	 			console.log('更新婚拍产品失败');
	 			callback(error);
	 		} else {
	 			console.log('更新婚拍产品成功');
	 			callback();
	 		}
	 	});
	}

	/**
	* 删除数据
	* @params condition: 查询条件，callback：回调函数
	*/
	this.remove = function (conditon, callback) {
		this.obj.remove(condition, function (error) {
			if (error) {
				console.log('删除失败！');
			} else {
				console.log('删除成功！');
			}
			callback(error);
		});
	}
}
 
module.exports = Common;