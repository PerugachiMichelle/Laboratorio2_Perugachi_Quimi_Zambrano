const Usuario = require('../models/Usuario');

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
}

const createUsuario = async (req, res) => {
    try {
        const nuevo = await Usuario.createUsuario(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateUsuario = async (req, res) => {
    try {
        const result = await Usuario.updateUsuario(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllUsuarios,
    createUsuario,
    updateUsuario
}