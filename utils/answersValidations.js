const { check } = require('express-validator');
const { validateInputs } = require('../middlewares/validateInputs');

const validations = [
	check('client', 'El nombre del encuestado es obligatorio').not().isEmpty(),
	check('school', 'El nombre de la escuela del enceustado es obligatorio')
		.not()
		.isEmpty(),
	check('funcionalidad', 'La puntuacion de la funcionalidad es obligatoria')
		.not()
		.isEmpty(),
	check('funcionalidad', 'El rango de la putacion es de 0 a 5').isFloat({
		min: 0,
		max: 5,
	}),
	check('confiabilidad', 'La puntuacion de la confiabilidad es obligatoria')
		.not()
		.isEmpty(),
	check('confiabilidad', 'El rango de la putacion es de 0 a 5').isFloat({
		min: 0,
		max: 5,
	}),
	check('usabilidad', 'La puntuacion de la usabilidad es obligatoria')
		.not()
		.isEmpty(),
	check('usabilidad', 'El rango de la putacion es de 0 a 5').isFloat({
		min: 0,
		max: 5,
	}),
	check('rendimiento', 'La puntuacion de la rendimiento es obligatoria')
		.not()
		.isEmpty(),
	check('rendimiento', 'El rango de la putacion es de 0 a 5').isFloat({
		min: 0,
		max: 5,
	}),
	check('mantenimiento', 'La puntuacion de la mantenimiento es obligatoria')
		.not()
		.isEmpty(),
	check('mantenimiento', 'El rango de la putacion es de 0 a 5').isFloat({
		min: 0,
		max: 5,
	}),
	check('portabilidad', 'La puntuacion de la portabilidad es obligatoria')
		.not()
		.isEmpty(),
	check('portabilidad', 'El rango de la putacion es de 0 a 5').isFloat({
		min: 0,
		max: 5,
	}),
	check('seguridad', 'La puntuacion de la seguridad es obligatoria')
		.not()
		.isEmpty(),
	check('seguridad', 'El rango de la putacion es de 0 a 5').isFloat({
		min: 0,
		max: 5,
	}),
	check('compatibilidad', 'La puntuacion de la compatibilidad es obligatoria')
		.not()
		.isEmpty(),
	check('compatibilidad', 'El rango de la putacion es de 0 a 5').isFloat({
		min: 0,
		max: 5,
	}),
	check('total', 'La puntuacion total es obligatoria').not().isEmpty(),
	check('total', 'El rango del total es de 0 a 100').isFloat({
		min: 0,
		max: 100,
	}),
	validateInputs,
];

module.exports = validations;
