const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');

router.get('/profesores', profesorController.getAllProfesores);



module.exports = router;