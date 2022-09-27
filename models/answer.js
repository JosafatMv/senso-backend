const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Answer = db.define('Answer', {
	id_answer: {
		type: DataTypes.UUID,
		unique: true,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4,
	},
	client: {
		type: DataTypes.STRING,
	},
	school: {
		type: DataTypes.STRING,
	},
	funcionalidad: {
		type: DataTypes.DOUBLE,
	},
	confiabilidad: {
		type: DataTypes.DOUBLE,
	},
	usabilidad: {
		type: DataTypes.DOUBLE,
	},
	rendimiento: {
		type: DataTypes.DOUBLE,
	},
	mantenimiento: {
		type: DataTypes.DOUBLE,
	},
	portabilidad: {
		type: DataTypes.DOUBLE,
	},
	seguridad: {
		type: DataTypes.DOUBLE,
	},
	compatibilidad: {
		type: DataTypes.DOUBLE,
	},
	total: {
		type: DataTypes.DOUBLE,
	},
	survey_key: {
		type: DataTypes.STRING,
	},
});

module.exports = Answer;
