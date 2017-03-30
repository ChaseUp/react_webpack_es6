var express = require('express');
var router = express.Router();

module.exports = function(app){
	app.get('/',function (req,res) {
		res.render('index');
	});

	app.get('/headerMsg',function(req,res){
		var xhr = {
			"siteUrl": "www.baidu.com",
			"noticeNum": "43",
			"noticeUrl": "www.google.com",
			"avatarUrl": "/dist/images/avatar.jpg",
			"userName": "ChaseUp",
			"navMsg": [
				{"name": "我的网站","url": "myDashboard.html"},
				{"name": "运营罗盘","url": "myDashboard.html"},
				{"name": "社交助手","url": "myDashboard.html"},
				{"name": "我的员工","url": "myDashboard.html"}
			]
		};
		res.send(xhr);
	});

	app.get('/aside',function(req,res){
		var msg = {
			"job": "超級管理員",
			"sended": "6",
			"unsend": "8"
		};
		res.send(msg);
	})
}