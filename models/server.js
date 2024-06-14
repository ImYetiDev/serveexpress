const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT
    this.usuariosPath = '/api/usuarios'

    this.middleware()
    this.routes()
  }

  middleware () {
    //CORS
    this.app.unsubscribe(
      cors()
    )

    //Lectura y parseo del body
    this.app.use(
      express.json()
    )

    //Directorio Publico
    this.app.use(
      express.static('public')
    )
  }

  routes () {
    this.app.use(this.usuariosPath, require('../routes/usuarios'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo ', this.port)
    })
  }
}

module.exports = Server
