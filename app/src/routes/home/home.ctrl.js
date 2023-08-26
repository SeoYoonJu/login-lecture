"use strict";

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
    }
}

const users = {
    id: ["최승철", "윤정한", "홍지수"],
    psword: ["1234", "12345", "123456"]
}

const process = {
    login : (req, res) => {
        const id = req.body.id,
            psword = req.body.psword; //요청받아온 id와 비번

        if(users.id.includes(id)){ //비번이 아이디값과 같은 순서에 있으면 true
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
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