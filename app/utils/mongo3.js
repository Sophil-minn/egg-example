'use strict';

const Mongodb = require('@pick-star/cli-mongodb');
const { mongodbUrl3 } = require('../../config/db');

function mongo3() {
	return new Mongodb(mongodbUrl3);
}

module.exports = mongo3;