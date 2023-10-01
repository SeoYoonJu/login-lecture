const fs =require("fs").promises;

class UserStorage{
    // static #users = { //다른 외부 파일에서 다이렉트로 접근불가능하도록 은닉화 # (public->private)
    //     id: ["최승철", "윤정한", "홍지수"],
    //     psword: ["1234", "12345", "123456"],
    //     name: ["최승철", "윤정한", "홍지수"],
    // };

    static #getUserInfo(data, id){ //은닉화를 통해 가독성을 좋게함
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users);
            const userInfo = usersKeys.reduce((newUser,info) => { //users의 key값들만 리스트로 만들기 =>[id, psword]
                newUser[info] = users[info][idx];
                return newUser;
            },{});
            return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields){ //getter역할 ...fields는 파라미터를 통해 원하는 key값만 받아오는 역할
        //const users = this.#users;
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
    }//users를 불러오는 메소드

    static getUserInfo(id){
        //const users = this.#users;
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static async save(userInfo){
        const users =await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        } 
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success: true};
    }
}

module.exports = UserStorage;