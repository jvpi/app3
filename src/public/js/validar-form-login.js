const validarForm = {
	elementoForm: document.getElementById('form'),
	inputs: document.querySelectorAll('input'),
	inputPsword : document.getElementById('inputPsword'),
	preventDefault : function () {
		this.elementoForm.addEventListener('submit', function (e) {
			e.preventDefault()
			validarForm.validarInput()
		})
	},
	validarInput : function () {
		this.inputs.forEach(function (elemento) {
			if (elemento.value !== '') {
				validarForm.elementoForm.submit()
			}
		})	
	}
}

validarForm.preventDefault()





