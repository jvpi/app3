const express = require('express')
const {Pool} = require('pg')
const app = express()
const path = require('path')
const router = require('./routes/index')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs')
const passport = require('passport')
const localStrategy = require('passport-local')
const session = require('express-session')
const flash = require('connect-flash');

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))


//middlewares 
app.use(session({ 
		secret: "cat",
		resave: false,
	    saveUninitialized: false
}))
app.use(express.urlencoded({extended:false}))
app.use(passport.initialize())
app.use(passport.session())	
app.use(flash());
app.use(function (req,res,next) {
	res.locals.mensaje = req.flash('error')
	next()
})

//RUTAS

app.use(router)


//ARCHIVOS ESTATICOS

app.use(express.static(path.join(__dirname,'public')))

//manejos de errores para las rutas 
app.use(function (req,res) {
	res.sendFile(path.join(__dirname,'public/404.html'))
})


//servido
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'))

