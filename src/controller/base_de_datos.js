const {Pool} = require('pg')
const basesDeDatos = {}
basesDeDatos.registroUsuario = function () {
	const pool = new Pool({
		user:"postgres",
		host:"localhost",
		database:'resgistro_usuarios',
		password:"123456",
		port:5432
	})
	return pool
}
basesDeDatos.almacenarInformacion = function () {
	const pool = new Pool({
		user:'postgres',
		host:'localhost',
		database:'usuarios',
		password:'123456',
		port:5432
	}) 
	return pool
}



module.exports = basesDeDatos