const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Survey = db.define('Survey', {
	key: {
		type: DataTypes.STRING,
		unique: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	status: {
		type: DataTypes.BOOLEAN,
		defaultValue: '1',
	},
});

module.exports = Survey;
