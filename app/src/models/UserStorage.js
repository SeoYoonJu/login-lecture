class UserStorage{
    static #users = { //다른 외부 파일에서 다이렉트로 접근불가능하도록 은닉화 # (public->private)
        id: ["최승철", "윤정한", "홍지수"],
        psword: ["1234", "12345", "123456"]
    };

    static getUsers(...fields){ //getter역할 ...fields는 파라미터를 통해 원하는 key값만 받아오는 역할
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser,info) => { //users의 key값들만 리스트로 만들기 =>[id, psword]
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
}

module.exports = UserStorage;