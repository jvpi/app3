let expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	edad: /^\d{1,14}$/ // 7 a 14 numeros.
}
const campos = {
	nombre: false, 
	apellido: false,
	edad: false
}
class Form{
	constructor(form){
		this.form = document.getElementById(form)
	}

	eventoSubmit () {
		let that = this
		this.form.addEventListener('submit',function (e) {
			e.preventDefault()
			that.enviarDatos()
		})
	}
	campoNombre () {
		const nombre = document.getElementById('nombre')
		if (expresiones.nombre.test(nombre.value) && nombre.value.length > 0) {
				campos.nombre = true
			}	
	}
	campoAprellido () {
		const apellido = document.getElementById('apellido')
		if (expresiones.nombre.test(apellido.value) && apellido.value.length > 0) {
				campos.apellido = true
			}
	}
	campoEdad () {
		const edad = document.getElementById('edad')
		if (expresiones.edad.test(edad.value) && edad.value.length > 0) {
				campos.edad = true
			}
	}
	enviarDatos () {
		this.campoNombre()
		this.campoAprellido ()
		this.campoEdad ()
		const objValues = Object.values(campos)
		const valid = objValues.findIndex(function (elemento) {
			return elemento == false
		})
		if (valid == -1)return this.form.submit()
	}

	
}

const validar = new Form('form')
validar.eventoSubmit()

