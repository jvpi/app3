const controller = {}
const params = {}
const consulta = require('./base_de_datos.js')


controller.inicio = async function (req,res) {
	const  tabla1 = await consulta.almacenarInformacion().query(`select * from  usuario1`)
	const  tabla2 = await consulta.almacenarInformacion().query(`select * from  usuario2`)
	const  tabla3 = await consulta.almacenarInformacion().query(`select * from  usuario3`)
	
	res.render('vista-usuario',{mensaje:[tabla1.rows,tabla2.rows,tabla3.rows]
	})
}

controller.api = async function (req,res,error) {
	const text = 'select * from'
	const values ='usaurio'
	const resultado_consulta = []
	const tabla_asaurio = await consulta.almacenarInformacion().query(`select * from usuario1 `)


	res.json(tabla_asaurio.rows)

}
controller.tablas = async function (req,res,error) {
	try {
		params.tabla = req.params.tabla
		const respuesta = await consulta.almacenarInformacion().query(`select * from ${params.tabla}`)
		const idUser = req.session.passport.user
		const obtenerUser = await consulta.registroUsuario().query(`select * from  usuarios where id= '${idUser}'`)
		const nombreUser = obtenerUser.rows[0].nombre
		console.log(idUser)
		res.render('vista_admi',{
			mensaje: respuesta.rows,
			nombreUser : nombreUser
		})
		
	} catch(e) {
		
	}
   
}

controller.add = async function (req,res) {
	const text = `INSERT INTO ${params.tabla} (nombre, edad, apellido) VALUES($1, $2, $3)`
	const values = [req.body.nombre, req.body.edad, req.body.apellido]
	const data  = await consulta.almacenarInformacion().query(text,values)
	res.redirect(`/adm/${params.tabla}`)
}
controller.delete =  async function (req,res) {
	const {id} = req.params
	const text = `DELETE FROM ${params.tabla} WHERE id= $1`
	const values = [req.params.id]
	const data  = await consulta.almacenarInformacion().query(text,values)
	res.redirect(`/adm/${params.tabla}`)
}

controller.editar = async function (req,res) {
	const text = `SELECT * FROM ${params.tabla} WHERE id= $1`
	const values = [req.params.id]
	const respuesta = await consulta.almacenarInformacion().query(text,values)
	res.render('form_actualizar',{mensaje: respuesta.rows[0]})
	
}
controller.actualizar = async function (req,res) {
	const text = `UPDATE ${params.tabla} SET nombre= $1, edad=$2, apellido=$3 WHERE id= $4`
	const values = [req.body.nombre, req.body.edad, req.body.apellido, req.params.id]
	const respuesta = await consulta.almacenarInformacion().query(text,values)
	res.redirect(`/adm/${params.tabla}`)
	
}


module.exports = controller
