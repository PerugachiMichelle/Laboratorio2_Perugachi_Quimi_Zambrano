const Libro = require('../models/Libro');

// obtener todos los libros
const getAllLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener libros' });
    }
}

// crear libro
const createLibro = async (req, res) => {
    try {
        const nuevoLibro = await Libro.createLibro(req.body);
        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// eliminar libro
const deleteLibro = async (req, res) => {
    try {
        const result = await Libro.deleteLibro(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// actualizar libro
const updateLibro = async (req, res) => {
    try {
        const result = await Libro.updateLibro(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// buscar libro por id
const getLibroById = async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllLibros,
    createLibro,
    deleteLibro,
    updateLibro,
    getLibroById
}