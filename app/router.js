'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/project', controller.project.index);
  router.get('/project/template', controller.project.getTemplate);
  router.get('/project/dbdata', controller.project.getData);
  router.get('/project/test', controller.project.getTest);
  router.get('/project/test3', controller.project.getTest3);
};
