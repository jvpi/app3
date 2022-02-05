async function datos() {
	const url = 'http://localhost:3000/api'
	const res = await fetch(url)
	const json = await res.json()
	if (!res.ok) {
		throw new Error('error')
	}
	
	return json
}

(async function () {
	try {
		const ress = await datos()
		console.log(ress)
	} catch(e) {
		console.log(e);
	}
})()
