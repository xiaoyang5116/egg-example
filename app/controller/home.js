'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = `hi, egg`;
    await ctx.render("index.html", {
      title: "我是shawn"
    })
  }

  // 用户信息: /user/6
  // async user() {
  //   // const {ctx} = this
  //   // const { id } = this.ctx.params // 通过 params 获取申明参数
  //   const { name, slogan } = await this.ctx.service.home.user()  // service 返回数据
  //   this.ctx.body = {
  //     name,
  //     slogan
  //   }
  // }

  // 连接数据库后
  async user() {
    const { ctx } = this
    const result = await ctx.service.home.user()  // service 返回数据
    this.ctx.body = result
  }

  async addUser() {
    const { ctx } = this
    const { name } = ctx.request.body
    try {
      const result = await ctx.service.home.addUser(name)
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: null
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null
      }
    }
  }

  // 编辑用户
  async editUser() {
    const { ctx } = this
    const { id, name } = ctx.request.body
    try {
      const result = ctx.service.home.editUser(id, name)
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: null
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '修改失败',
        data: null
      }
    }
  }

  //删除用户
  async deleteUser() {
    const { ctx } = this
    const { id } = ctx.request.body
    try {
      const result = ctx.service.home.deleteUser(id)
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: null
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '删除失败',
        data: null
      }
    }
  }





}

module.exports = HomeController;
