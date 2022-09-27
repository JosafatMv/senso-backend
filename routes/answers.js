const { Router } = require('express');
const {
	getAnswers,
	getAnswer,
	createAnswer,
} = require('../controllers/answers');
const validations = require('../utils/answersValidations');

const router = Router();

router.get('/:key', getAnswers);
router.get('/:key/:id', getAnswer);
router.post(
	'/:key',
	validations,
	createAnswer
);

module.exports = router;
