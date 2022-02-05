function obtenerTabla() {
	const uri = localStorage.getItem('valorBtn')
	const btn = document.getElementById('btn')
	btn.href = uri
}

obtenerTabla() 