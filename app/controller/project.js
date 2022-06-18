'use strict';

const Controller = require('egg').Controller;
const mongo = require('../utils/mongo');

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
    	name: 'project data myproject',
    	a:1, 
    	b: true
    };
  }
  // 获取项目/组件的代码模板
  async getTemplate() {
  	const { ctx } = this;
  
  	console.log('get template', 'data');
  	// console.log(mongo(), 'mongo()');
  	const data = await mongo().query('project');
  	console.log('get template', 'data');
    ctx.body = data;
  }
}

module.exports = ProjectController;
