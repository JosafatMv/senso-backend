const { Sequelize } = require('sequelize');

const db = new Sequelize('senso', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	define: {
		timestamps: false,
		
	},
});

const dbConnection = async () => {
	try {
		await db.authenticate();
		console.log('Database Online');
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

module.exports = { db, dbConnection };
