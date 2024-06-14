const { request, response } = require('express')

const usuariosGet = (req = request,res = response) =>{

	const { q, nombre, apikey, page, limit} = req.query

	res.json({
		msg: 'Get API - Controller', 
		q,
		nombre,
		apikey,
		page,
		limit
	})
}
const usuariosPut = () => {
}

const usuariosPost = () => {
}
const usuariosDelete = () => {
}
const usuariosPatch = () => {
}

module.exports = {
	usuariosGet,
	usuariosPut,
	usuariosPost,
	usuariosDelete,
	usuariosPatch
}