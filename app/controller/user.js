const { Controller } = require("egg");


class UserController extends Controller {
    // -----get
    async info() {
        const { ctx } = this
        ctx.body = {
            name: `hello ${ctx.params.id}`,
        }
    }
    // -----post
    async add() {
        const { ctx } = this
        const { name } = ctx.request.body
        // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
        ctx.body = {
            name,
        }
    }
}

module.exports = UserController;