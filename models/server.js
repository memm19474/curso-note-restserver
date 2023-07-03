const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Midelwares
        this.app.use(cors());
        

        this.middelwares();

        //Rutas de mi app
        this.routes();
    }

    middelwares(){
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }


    listen(){
            this.app.listen(process.env.PORT, ()=>{
            console.log('Se esta escuchando por el puerto', this.port)
        })
    }
}

module.exports = Server;