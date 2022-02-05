const controller = {}
const passport = require('passport')
const localStrategy = require('passport-local')
const flash = require('connect-flash');
const bcrypt = require('bcrypt-nodejs')
const pool = require('./base_de_datos.js')


passport.use(new localStrategy(async function (username,password,done) {
	const  respuesta = await pool.registroUsuario().query(`select * from  usuarios where nombre= '${username}'`)
	if (respuesta.rows.length == 0) {
		return done(null,false,{message:'Usuario no registrado'})
	}else {
		const comparar = bcrypt.compareSync(password,respuesta.rows[0].password)
		//respuesta.rows[0].password == password
		if (comparar) return done(null,respuesta.rows)
		done(null,false,{message:'Contraseña incorrecta'})	

	}

}))
passport.serializeUser(function (user,done) {
	done(null,user[0].id)
})
passport.deserializeUser(async function (id,done) {
	const respuesta = await pool.registroUsuario().query(`select * from  usuarios where id= '${id}'`)
	done(null,respuesta.rows[0])
})
controller.renderLogin = function (req,res) {
	res.render('formulario-login')
}
controller.logout = function (req,res,next) {
	req.logout()
	req.session.destroy()
	res.redirect('/login')	
}
controller.session = function(req,res,next) {

	next()
}
controller.autenticarSesion = function (req,res,next) {
	if (req.isAuthenticated()) return next()
	res.redirect('/login/')	
}
module.exports = controller