"use strict";

const User = require("../../models/User");

// const hello = (req, res) => {
//     res.render("home/index");
// };
// //hello라는 컨트롤러 함수를 만들고 이를 외부에서 사용해줌

// const login = (req, res) => {
//     res.render("home/login")
// };

const output = {
    hello : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    } 
}

const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        // const id = req.body.id,
        //     psword = req.body.psword; //요청받아온 id와 비번

        // const users= UserStorage.getUsers("id", "psword");

        // const response = {};
        // if(users.id.includes(id)){ //비번이 아이디값과 같은 순서에 있으면 true
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] === psword){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하였습니다.";
        // return res.json(response);
    }      
}

module.exports = {
    output,
    process,
};

// module.exports = {
//     hello, login,
// };
/*
{
    hello : hello,
    login : login,
}과 같은 표현
*/