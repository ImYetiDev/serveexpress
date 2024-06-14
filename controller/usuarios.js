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
usuariosPut
usuariosPost
usuariosDelete
usuariosPatch