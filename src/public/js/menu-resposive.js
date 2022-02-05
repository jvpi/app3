class AparecerMenu{
	constructor(elemento,clasList){
		this.elemento = obteberElemento(elemento)
		this.clasList = clasList
	}
	get aparecer (){
	 	let that = this
		this.elemento.addEventListener('click',function (e) {
			if (e.target.id === 'img-menu') {
				that.menuClassList ()	
				that.liClassList ()
				that.crossClassList ()
				that.aparecerBtnSesion ()
				return false
			}
			if (e.target.id === 'img-cross') { 
				that.menuClassList ()
				that.liClassList ()
				that.crossClassList ()
				that.ocultarBtnSesion () 
				return false
			}
		})
	}
	liClassList () {
		const menuLista = document.getElementsByClassName("menu_elemeto")
		for (var i = 0; i < menuLista.length; i++) {
			this.clasList(menuLista[i],'aparecerLista')
		}	
	}
	crossClassList () {
		const cross = obteberElemento("img-cross")
		this.clasList(cross,'aparecerCross')
	}
	menuClassList () {
		const menu = obteberElemento("img-menu")
		this.clasList(menu,'oculatarMenu')
	}
	aparecerBtnSesion () {
		const logout = document.getElementById('logout')
		logout.style.display = 'block'
	}
	ocultarBtnSesion () {
		const logout = document.getElementById('logout')
		logout.style.display = 'none'
	}
}

function obteberElemento(elemento) {
	return document.getElementById(elemento)
}
function agragarClase(elemento,clase) {
	elemento.classList.add(clase)
}
function removerClase(elemento,clase) {
	elemento.classList.remove(clase)
}
const menu = new AparecerMenu('img-menu',agragarClase)
const cross = new AparecerMenu('img-cross',removerClase)
menu.aparecer
cross.aparecer




