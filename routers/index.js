var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

module.exports = function(app){
	app.get('/',function (req,res) {
		res.render('index',{
			title: "social-msg"
		});
	});

	app.get('/headerMsg',function(req,res){
		var data = req.body;
		var xhr = {
			"siteUrl": "www.baidu.com",
			"noticeNum": "48",
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
		res.send(JSON.stringify(xhr));
	});

	app.get('/aside',function(req,res){
		var msg = {
			"job": "超級管理員",
			"sended": "66",
			"unsend": "8"
		};
		res.send(JSON.stringify(msg));
	})
}