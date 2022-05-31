// service 服务，操作数据库

const Service = require("egg").Service;

class UserService extends Service {
    async find(uid) {
        const { ctx } = this
        const user = await ctx.db.query(
            'select * from user where uid = ?',
            uid,
        )
        return user
    }
}
module.exports = UserService