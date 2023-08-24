"use strict"

const app = require("../app"); //상위폴더로 가서 app가져오기
const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});