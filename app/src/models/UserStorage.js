class UserStorage{
    static #users = { //다른 외부 파일에서 다이렉트로 접근불가능하도록 은닉화 # (public->private)
        id: ["최승철", "윤정한", "홍지수"],
        psword: ["1234", "12345", "123456"]
    };

    static getUsers(...fields){ //getter역할
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;