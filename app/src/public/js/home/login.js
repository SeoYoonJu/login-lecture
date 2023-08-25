"use strict";

const id = document.querySelector("#id"), //태그에 id로 부여되어 있는 id를 가져와달라
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,  //.value => id의 입력값을 받아옴
        psword : psword.value,
    };

}