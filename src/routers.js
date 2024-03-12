const express = require('express');
const router = express.Router();

const samantaController = require('./controllers/samantaController');

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx PLANTA X xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
router.get('/planta', samantaController.listarPlantas);
router.get('/planta/:Id_Planta', samantaController.buscarId_Planta);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx SENSOR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
router.get('/sensor', samantaController.listarSensor);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx USUARIOS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
router.get('/usuario', samantaController.listarUsuarios);
router.get('/planta/:Id_Usuario', samantaController.buscarId_Usuario);

module.exports = router;