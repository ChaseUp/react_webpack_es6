var express = require('express');
var path = require('path');
var routers = require('./routers/index.js');
var app = express();
var port = '3300';

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
routers(app);

app.listen(port,function(){
	console.log("app listening" + port);
});