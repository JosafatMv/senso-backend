const { Sequelize } = require('sequelize');

// const db = new Sequelize('senso', 'root', 'root', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	define: {
// 		updatedAt: false,
// 	},
// });

const db = new Sequelize(
	'bf6zjft0czzavqnbjsr2',
	'uepsd6vezh6wmev4',
	'TLA2UfZyxHgdjiDUNu6N',
	{
		host: 'bf6zjft0czzavqnbjsr2-mysql.services.clever-cloud.com',
		dialect: 'mysql',
		define: {
			updatedAt: false,
		},
	}
);

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
