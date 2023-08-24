"use strict";

const hello = (req, res) => {
    res.render("home/index");
};
//hello라는 컨트롤러 함수를 만들고 이를 외부에서 사용해줌

const login = (req, res) => {
    res.render("home/login")
};

module.exports = {
    hello, login,
};
/*
{
    hello : hello,
    login : login,
}과 같은 표현
*/