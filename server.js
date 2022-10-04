const express = require('express')
const app = express()

class server{
    constructor(){
        this.app = express()
        this.port = process.env.port

        this.routes()
    }

    routes(){
        this.app.get('/',(req, res) => {
            res.send('hola mundo')
        }) // end point
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port)
        })
    }
}

module.exports = server