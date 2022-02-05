const controller = {}
const pool = require('./base_de_datos.js')
const bcrypt = require('bcrypt-nodejs')
controller.render =  function(req,res) {
	
	res.render('form-cambioContraseña')
}

controller.editar = async function(req,res) {
	const idUser = req.session.passport.user
	const passwordNueva = req.body.nueva
	const hash = bcrypt.hashSync(passwordNueva,bcrypt.genSaltSync(5))
	console.log(req.session.passport.user)
	const respuesta = await pool.registroUsuario().query(`UPDATE usuarios SET password= '${hash}' WHERE id= '${idUser}'`)
	res.redirect('/adm/usuario1')
}
module.exports = controller