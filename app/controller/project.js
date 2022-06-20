'use strict';

const Controller = require('egg').Controller;
const mongo = require('../utils/mongo');


/*
 *  测试使用mongoose操作mongodb数据库
 */
// 1. 连接数据库
// 1.1 引入mongoose
const mongoose = require('mongoose');

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
    	name: 'project data myproject',
    	a: 1,
    	b: true,
    };
  }
  // 获取项目/组件的代码模板
  async getTemplate() {
  	const { ctx } = this;
    const uri = 'mongodb://beibei:123456@localhost:27017/beibei-cli';
    console.log(uri, 'uri');
    // const myDataCon = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // // 1.3 获取连接对象
    // const conn = mongoose.connection;
    // // 1.4 绑定连接完成的监听
    // conn.on('connected', () => { // 连接成功回调
    //   console.log(myDataCon, '数据库连接成功~');
    // });
  	console.log('get template', 'data');
    this.mongo = mongo();
  	console.log(JSON.stringify(mongo().query), 'mongo()');
  	const data = await mongo().query("project");
    // // const data = require('./mock');
  	console.log('get template', data, 'data');
    ctx.body = data;
  }

  async getTest() {
    // URI
    const uri = 'mongodb://localhost:27017/beibei-cli';
    console.log(uri, 'uri');
    // 1.2 连接指定数据库（URL只有数据库是变化的）
    // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // 1.3 获取连接对象
    // const conn = mongoose.connection;
    // // 1.4 绑定连接完成的监听
    // conn.on('connected', () => { // 连接成功回调
    //   console.log('数据库连接成功~');
    // });
  }

  // 获取项目/组件的代码模板
  async getData() {
  	const { ctx } = this;
  	console.log('get template dddddddd ', 'data');
  	// console.log(mongo(), 'mongo()');
  	// const data = await mongo().query('project');/*  */
    const data = require('./mock');
  	console.log('get----------db', data);
    ctx.body = data;
  }

}

module.exports = ProjectController;
