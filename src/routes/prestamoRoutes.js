const express = require('express');
const router = express.Router();

const {
    getAllPrestamos,
    createPrestamo
} = require('../controllers/prestamoController');

// rutas prestamos
router.get('/', getAllPrestamos);
router.post('/', createPrestamo);

module.exports = router;