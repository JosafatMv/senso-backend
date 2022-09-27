const { Router } = require('express');
const { check } = require('express-validator');

const {
	createSurvey,
	getSurveys,
	getSurvey,
	endSurvey,
} = require('../controllers/surveys');
const { validateInputs } = require('../middlewares/validateInputs');

const router = Router();

router.post(
	'/',
	[
		check('key', 'La clave es obligatoria').not().isEmpty(),
		check('name', 'El nombre es obligatoria').not().isEmpty(),
		validateInputs,
	],
	createSurvey
);
router.get('/', getSurveys);
router.get('/:key', getSurvey);
router.put('/:key', endSurvey);

module.exports = router;
