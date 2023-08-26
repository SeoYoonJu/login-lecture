"use strict";

const id = document.querySelector("#id"), //태그에 id로 부여되어 있는 id를 가져와달라    
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,  //.value => id의 입력값을 받아옴
        psword : psword.value,
    };
    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req), // stringify => 자바스크립트 객체를 JSON데이터로 변환
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href ='/';
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    })
}