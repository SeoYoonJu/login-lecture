// const http = require("http"); //npm 필요 없음
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     if (req.url === "/"){
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.")
// });

//http보다 express가 더 간단함

//모듈
const express = require('express');
const app = express(); //npm install express --save
const bodyParser = require("body-parser");
//const PORT = 3000;

//앱 세팅 화면뷰를 관리해줄 파일과 그 파일이 저장된 장소
app.set("views", "./src/views");
//그 파일 안에 생성될 html코드를 어떤 엔진으로 해석할지
app.set("view engine", "ejs");

/* Refactoring 이 코드가 index.js로 가고 app.use로 불러줌
app.get("/", (req, res) => {
    res.render("home/index"); //앞에서 views를 set해주었기 때문에 views/안적어도 됨
});

app.get("/login", (req, res) => {
    res.render("home/login");
})
*/

//라우팅
const home = require("./src/routes/home");

//앱 세팅
 //use: 미들웨어를 등록하는 메소드
app.use(express.static(`${__dirname}/src/public`))
//디렉토리 안에 src안에 public폴더를 정적경로로 추가

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않아 true값을 줘서 해결
app.use("/",home);
/*Refactoring bin에 www.js에 보내주고 모듈 내보내기
app.listen(PORT, function(){
    console.log("서버 가동");
})
*/
module.exports = app;
