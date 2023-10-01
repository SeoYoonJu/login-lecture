"use strict"; //ECMAscript문법을 준수하겠다

//라우팅 분리하기
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

/*Refactoring 컨트롤러를 home.ctrl.js에서 따로 뺴서 정의해줌
router.get("/", (req, res) => {
    res.render("home/index");
});
*/
router.get("/", ctrl.output.hello);

/*
router.get("/login", (req, res) => {
    res.render("home/login");
}); //요청에 해당하는 기능을 시행하는 부분->컨트롤러
*/
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login",ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router; //내보내는 역할