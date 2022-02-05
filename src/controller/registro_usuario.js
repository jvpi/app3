const controller = {}
const consulta = require('./base_de_datos')
const bcrypt = require('bcrypt-nodejs')
const baseDeDatos = {
	user:'postgres',
	host:'localhost',
	database:'resgistro_usuarios',
	password:'123456',
	port:5432
}

controller.render = async function (req,res) {
	const userName = 'dsdasd'
	const consulta1 = await consulta(baseDeDatos).query(`select * from  usuarios where nombre= '${userName}'`)
	if (consulta1) {
		console.log('consulta1')
	}
	res.render('formulario-registro')
	
}
controller.registro = async function (req,res) {
	const text = `INSERT INTO usuarios (nombre, password, correo) VALUES($1, $2, $3)`
	const values = [req.body.nombre, req.body.password, req.body.correo]
	const consulta1= await consulta(baseDeDatos).query(text,values)
	res.redirect('/registro')
}

module.exports = controller