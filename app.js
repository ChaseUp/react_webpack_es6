var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

// app.get('/',function(req,res){
// 	res.sendFile('./index.html');
// })

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',function (req,res) {
	res.render('index');
})

app.listen('3030',function(){
	console.log("start");
});