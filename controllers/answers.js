const Answer = require('../models/Answer');
const Survey = require('../models/survey');

const getAnswers = async (req, res) => {
	const { key } = req.params;

	try {
		const survey = await Survey.findByPk(key);

		if (!survey) {
			return res.status(404).json({
				ok: false,
				msg: `No existe encuesta con la clave ${id}`,
			});
		}

		const answers = await Answer.findAll({
			where: { survey_key: key },
		});

		res.json({ ok: true, answers });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
			answers: [],
		});
	}
};

const getAnswer = async (req, res) => {
	const { key } = req.params;
	const { id } = req.params;

	try {
		const survey = await Survey.findByPk(key);

		if (!survey) {
			return res.status(404).json({
				ok: false,
				msg: `No existe encuesta con la clave ${key}`,
				answer: {},
			});
		}

		const answer = await Answer.findOne({
			where: { survey_key: key, id_answer: id },
		});

		if (!answer) {
			return res.status(404).json({
				ok: false,
				msg: `No existe respuesta con el id ${id}`,
				answer: {},
			});
		}

		res.json({ ok: true, answer });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
			answer: {},
		});
	}
};

const createAnswer = async (req, res) => {
	const { key } = req.params;
	const { body } = req;

	try {
		body.survey_key = key;
		const survey = await Survey.findByPk(key);

		if (!survey) {
			return res.status(404).json({
				ok: false,
				msg: `No existe encuesta con la clave ${key}`,
			});
		}

		if (survey.dataValues.status == '0') {
			return res.status(406).json({
				ok: false,
				msg: `No se puede agregar una respuesta a una encuesta finalizada`,
			});
		}

		const answer = new Answer(body);
		await answer.save();

		res.json({
			ok: true,
			answer,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

module.exports = {
	getAnswers,
	getAnswer,
	createAnswer,
};
