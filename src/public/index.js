const formulario = document.getElementById('form')
const inputs = document.querySelectorAll('#form input')
const expresiones = {
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
const validarForm = function (e) {
	switch (e.target.name) {
		case 'nombre':
		plantillaValidacion(expresiones.nombre,e.target,campos)
		break;
		case 'apellido':
		plantillaValidacion(expresiones.nombre,e.target,campos)
		break;
		case 'edad':
		plantillaValidacion(expresiones.edad,e.target,campos)
		break;
	}
}
const plantillaValidacion = function (expresiones,target,campos) {
		
	if (expresiones.test(target.value)) {
		removerBorderError(target)
		removerMesanjeError()
		eliminarMenasjeErrorAyuda(target)
		campos[target.name] = true
		return false

	}	
	campos[target.name] = false
	agregarBorderError(target)
	mensajeErrorAyuda(target)
	return false
}

inputs.forEach(function (input) {
	input.addEventListener('change',validarForm)
	input.addEventListener('keyup',validarForm)

})

formulario.addEventListener('submit',evento)	

function evento(e) {
	e.preventDefault()
	validacionFormulario(this)
	
}


function crearMensajeDeError(nodoPadre,nodoAcrear) {
	const containerForm = document.getElementById(nodoPadre)
	return function (elementoId) {
			const mensajeError = document.createElement(nodoAcrear)
			const fragmento = document.createDocumentFragment()
			mensajeError.textContent = 'todos los campos son obligatorio'
			fragmento.appendChild(mensajeError)
			if (!document.getElementById(elementoId)) {
			containerForm.appendChild(fragmento)
			mensajeError.setAttribute('id', elementoId)
		}
	}
	
}

function monstrarMensajeError() {
	const inputs = document.getElementsByClassName('inputs')
	const miMensajeError = crearMensajeDeError('container-form','p')
	for (var i = 0 ; i < inputs.length; i++) {
		if (inputs[i].value == '') {
			miMensajeError("elementID")
			borderError()
		}
	}
}
function removerMesanjeError() {
	const containerForm = document.getElementById('container-form')
	const hijo = document.getElementById('elementID')
	if (document.getElementById('elementID')) containerForm.removeChild(hijo)
	
}

function plantillaElementoMensaje(elemento,id,mensaje,target) {
	const mensajeError = document.createElement(elemento)
	const fragmento = document.createDocumentFragment()
	fragmento.appendChild(mensajeError)
	if (!document.getElementById(id)) {
		mensajeError.textContent = mensaje
		target.insertAdjacentElement("afterend",mensajeError)
		mensajeError.setAttribute('id', id)
	}
}
function mensajeErrorAyuda(target) {
	switch (target.name) {
		case 'nombre':
			plantillaElementoMensaje('p',"mensaje-error",'solo texto',target)
			break;
		case 'apellido':
			plantillaElementoMensaje('p',"mensaje-error2",'solo texto',target)
			break;
		case 'edad':
			plantillaElementoMensaje('p',"mensaje-error3",'solo numero',target)
			break;
		}
}
function plantillaEliminarMensaje(target,idHijo,idPadre) {
	if (document.getElementById(idHijo)) {
		const containerIputs = document.getElementById(idPadre)
		const hijo = document.getElementById(idHijo)
		containerIputs.removeChild(hijo)
	}
}
function eliminarMenasjeErrorAyuda(target) {
	switch (target.name) {
		case 'nombre':
			plantillaEliminarMensaje(target,'mensaje-error','container-iputs')
			break;
		case 'apellido':
			plantillaEliminarMensaje(target,'mensaje-error2','container-iputs2')
			break;
		case 'edad':
			plantillaEliminarMensaje(target,'mensaje-error3','container-iputs3')
			break;
		}
}

function borderError() {
	const inputs = document.getElementsByClassName('inputs')
	for (var i = 0 ; i < inputs.length; i++) {
		inputs[i].classList.add('inputs-border-error')
	}	
}
function agregarBorderError(target) {
	target.classList.add('inputs-border-error')
}
function removerBorderError(target) {
	target.classList.remove('inputs-border-error')
}
const validacionFormulario = function ($this) {
	const objValues = Object.values(campos)
	const valid = objValues.findIndex(function (elemento) {
		return elemento == false
	})

	if (valid == -1) {
		$this.submit()
		$this.reset()
		return true
	}
	monstrarMensajeError()

}




