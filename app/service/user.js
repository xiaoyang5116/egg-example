// service 服务，操作数据库
const Service = require('egg').Service;

class UserService extends Service {
    async user() {
        return {
            name: "潘嘎之交",
            slogen: "网络的世界太虚拟,你把握不住"
        }
    }
}
module.exports = UserService