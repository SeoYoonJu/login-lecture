const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        const {id, psword} = await UserStorage.getUserInfo(client.id);
        
        if(id){
            if(id === client.id && psword === client.psword){
                return{ success: true};
            }
            return{ success :false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이다입니다."};
    }
    async register(){ 
        const client = this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
        } catch(err){
            return { success: false, msg: err}; //아이디 중복일때 에러처리하는 기능
        }
    }
}

module.exports = User;