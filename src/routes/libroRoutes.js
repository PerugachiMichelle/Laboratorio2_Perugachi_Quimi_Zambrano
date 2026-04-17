const express = require('express');
const router = express.Router();

const {
    getAllLibros,
    createLibro,
    deleteLibro,
    updateLibro,
    getLibroById
} = require('../controllers/libroController');

// rutas para la gestion de libros
router.get('/', getAllLibros);
router.get('/:id', getLibroById);
router.post('/', createLibro);
router.delete('/:id', deleteLibro);
router.put('/:id', updateLibro);

module.exports = router;