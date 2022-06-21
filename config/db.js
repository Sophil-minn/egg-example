'use strict';

const mongodbUrl = 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000';
const mongodbUrl2 = 'mongodb://beibei06:123456@localhost:27017/beibei-cli';
const mongodbUrl3 = 'mongodb://beibei:123456@localhost:27017/beibei-cli';
const mongodbDbName = 'beibei-cli';

module.exports = {
	mongodbUrl,
  mongodbUrl2,
  mongodbUrl3,
	mongodbDbName
}