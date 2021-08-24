// nodemon app.js로 서버 실행
var express = require('express')
var app = express() // express 함수 실

app.listen(3000, function(){ 
    // 3000포트로 실행하고 대기, 비동기로 인해 나중에 실행됨
    console.log("start! express server port 3000")
});

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//url : / route to main.html
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/main.html")
});

//url : /main route to main.html
app.get('/main', function(req, res){
    res.sendFile(__dirname + "/public/main.html")
});

app.post('/email_post', function(req,res){
    res.send("post respond");
    console.log(req.body.email);
});