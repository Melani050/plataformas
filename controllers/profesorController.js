// UTILIZA EL MODELO DE PROFESOR
const Profesor = require('../models/profesor');

// 
exports.getAllProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.findAll();
        res.json(profesores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

