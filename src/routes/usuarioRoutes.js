const express = require('express');
const router = express.Router();

const {
    getAllUsuarios,
    createUsuario,
    updateUsuario
} = require('../controllers/usuarioController');

router.get('/', getAllUsuarios);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);

module.exports = router;