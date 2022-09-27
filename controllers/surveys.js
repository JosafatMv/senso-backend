const Survey = require('../models/survey');

const createSurvey = async (req, res) => {
	const { body } = req;

	try {
		const existSurvey = await Survey.findOne({
			where: {
				key: body.key,
			},
		});

		if (existSurvey) {
			return res.status(400).json({
				ok: false,
				msg: `Ya existe una encuesta con la clave ${body.key}`,
			});
		}

		const survey = new Survey(body);
		await survey.save();

		res.json({
			ok: true,
			survey: survey,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const getSurveys = async (req, res) => {
	try {
		const surveys = await Survey.findAll();

		res.json({ ok: true, surveys });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
			surveys: [],
		});
	}
};

const getSurvey = async (req, res) => {
	const { key } = req.params;

	try {
		const survey = await Survey.findByPk(key);

		if (!survey) {
			return res.status(404).json({
				ok: false,
				msg: `No existe encuesta con la clave ${key}`,
				survey: {},
			});
		}

		res.json({ ok: true, survey });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const endSurvey = async (req, res) => {
	const { key } = req.params;

	try {
		const survey = await Survey.findByPk(key);

		if (!survey) {
			return res.status(404).json({
				ok: false,
				msg: `No existe encuesta con la clave ${key}`,
			});
		}

		await Survey.update(
			{ status: '0' },
			{
				where: {
					key,
				},
			}
		);

		res.json({
			ok: true,
			msg: `Encuesta con clave ${key} finalizada con exito`,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

module.exports = {
	createSurvey,
	getSurveys,
	getSurvey,
	endSurvey,
};
