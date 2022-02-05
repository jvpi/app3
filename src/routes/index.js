const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const controllerLogin = require('../controller/login.js')
const passport = require('passport')
const controllerEditar = require('../controller/editar_contraseña.js')
router.get('/',controller.inicio)
router.get('/login',controllerLogin.renderLogin)
router.get('/logout/',controllerLogin.logout)
router.get('/editar',controllerEditar.render)
router.post('/editar',controllerEditar.editar)
router.post('/login/',passport.authenticate('local',{
	successRedirect:'/adm/usuario1',
	failureRedirect:'/login',
	failureFlash:true
	
}))
router.get('/api/',controller.api)
router.get('/adm/:tabla',controllerLogin.autenticarSesion,
	controllerLogin.session,
	controller.tablas)
router.post('/add/',controller.add)
router.get('/delete/:id',controller.delete)
router.get('/actualizar/:id',controller.editar)
router.post('/actualizar/:id',controller.actualizar)

module.exports = router