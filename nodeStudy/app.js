// nodemon app.js로 서버 실행
var express = require('express')

var app = express() // express 함수 실행
app.listen(3000, function(){ 
    // 3000포트로 실행하고 대기, 비동기로 인해 나중에 실행됨
    console.log("start! express server port 3000")
});

//url : / route to main.html
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/main.html")
});

//url : /main route to main.html
app.get('/main', function(req, res){
    res.sendFile(__dirname + "/public/main.html")
});

//static file(.js) routing : public 디렉터리 내 파일들은 static으로 요청시 내려받을 수 있음.
app.use(express.static("public"))

/*app.post('/search', function(req, res){
    res.sendFile(__dirname + "/public/main.html")
});*/
