
const {response} = require ('express');

const usuariosGet = (req,res= response)=>{
    res.json({
        msg: 'Get API'
    });
}

const usuariosPost = (req,res)=>{
    res.json({
        msg: 'Post API'
    });
}

const usuariosPut= (req,res)=>{
    res.json({
        msg: 'Put API'
    });
}

const usuariosDelete= (req,res)=>{
    res.json({
        msg: 'Delete API'
    });
}

module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosDelete};