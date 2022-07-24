'use strict';

const { Service } = require("egg");

class HomeService extends Service {

    // async user() {
    //     // 假设从数据库获取的用户信息
    //     return {
    //         name: "嘎子",
    //         slogan: "网络的世界太虚拟,你把握不住",
    //     }
    // }

    // 连接数据库后
    // 查询用户
    async user() {
        const { ctx, app } = this;
        const QUERY_STR = 'id, name';
        let sql = `select ${QUERY_STR} from list`; // 获取 id 的 sql 语句
        try {
            const result = await app.mysql.query(sql); // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // 添加用户
    async addUser(name) {
        const { ctx, app } = this
        try {
            const result = app.mysql.insert('list', { name })
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    // 编辑用户
    async editUser(id, name) {
        const { app } = this
        try {
            const result = app.mysql.update('list', { name }, {
                where: {
                    id
                }
            })
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    // 删除用户
    async deleteUser(id, name) {
        const { app } = this
        try {
            const result = app.mysql.delete('list', { id })
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

}

module.exports = HomeService