"use strict";

const id = document.querySelector("#id"), //태그에 id로 부여되어 있는 id를 가져와달라    
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    if(!id.value){return alert("아이디를 입력해주세요.")}
    if(psword.value !== confirmPsword.value) {
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id : id.value,  //.value => id의 입력값을 받아옴
        name : name.value,
        psword : psword.value,
    };
    fetch("/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req), // stringify => 자바스크립트 객체를 JSON데이터로 변환
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href ="/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    })
}