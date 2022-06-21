'use strict';

const Mongodb = require('@pick-star/cli-mongodb');
const { mongodbUrl2, mongodbDbName } = require('../../config/db');

function mongo2() {
	return new Mongodb(mongodbUrl2);
}

module.exports = mongo2;