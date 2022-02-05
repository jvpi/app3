function toggleMenu() {
	const elemento = document.getElementById('desplegar-menu')
	const menuUsuario = document.getElementById('menu-usuario')
	elemento.addEventListener('click',function() {
		menuUsuario.classList.toggle('aparecerMenu')

	})
}
function ocultarMenuUsuario() {
	const body = document.getElementById('body')
	const menuUsuario = document.getElementById('menu-usuario')
	body.addEventListener('click',function(e) {
		if (e.target.id != 'desplegar-menu') {
			if (menuUsuario.classList.contains('aparecerMenu')) {
				menuUsuario.classList.remove('aparecerMenu')
			}
		}
	
	})
}
toggleMenu()
ocultarMenuUsuario()