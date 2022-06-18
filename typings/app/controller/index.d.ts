// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportMock = require('../../../app/controller/mock');
import ExportProject = require('../../../app/controller/project');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    mock: ExportMock;
    project: ExportProject;
  }
}
