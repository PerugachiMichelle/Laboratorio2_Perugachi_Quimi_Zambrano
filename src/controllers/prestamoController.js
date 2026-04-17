const Prestamo = require('../models/Prestamo');

// obtener todos los prestamos
const getAllPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.findAll();
        res.json(prestamos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener prestamos' });
    }
}

// crear prestamo
const createPrestamo = async (req, res) => {
    try {
        const nuevoPrestamo = await Prestamo.createPrestamo(req.body);
        res.status(201).json(nuevoPrestamo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllPrestamos,
    createPrestamo
}