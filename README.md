/api/survey

GET / : Trae todas las encuestas
GET /:key : Trae la encuesta con dicha key
POST / : {
"key": "Clave de la encuesta",
"name": "Nombre de la encuesta",
"status": "No se envia, por defecto se pone '1'",
} : "Crea una encuesta"
PUT /:key : "Finaliza la encuesta"

/api/answer

GET /:key : "Devuelve todas las respuesta de la encuesta con la clave 'key'"
GET /:key/:id : "Devuelve la respuesta con el id 'id' de la encuesta con la clave 'key'"
POST /:key : {
"client": "Nombre del encuestado",
"school": "Escuela del encuestado",
"funcionalidad": 0-5 (Decimales incluidos),
"confiabilidad": 0-5 (Decimales incluidos),
"usabilidad": 0-5 (Decimales incluidos),
"rendimiento": 0-5 (Decimales incluidos),
"mantenimiento": 0-5 (Decimales incluidos),
"portabilidad": 0-5 (Decimales incluidos),
"seguridad": 0-5 (Decimales incluidos),
"compatibilidad": 0-5 (Decimales incluidos),
"total": 0-100 (Porcentaje todal de la encuesta)
} : "Crea una respuesta en la encuesta con la clave 'key'"
