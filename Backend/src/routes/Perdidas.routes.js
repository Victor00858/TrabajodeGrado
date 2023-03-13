// En el archivo de rutas
const express = require('express');
const router = express.Router();
const PerTanks = require('../Controllers/Perdidas.controller');


router.get('/Caract', async (req, res) => {
    try{
        const myVariables = await PerTanks.getCVariables();
        console.log(myVariables);
        res.json(myVariables);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error interno del servidor');
    }
});
    
router.get('/valores', async (req, res) => {
    try {
        // Obtiene las variables de HTanks
        const variables = await PerTanks.getHVariables();
        console.log(variables);
        // Envía las variables al cliente
        res.json(variables);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/meteo', async (req, res) => {
    try {
        // Obtiene las variables de HTanks
        const Meteo = await PerTanks.getMVariables();
        console.log(Meteo);
        // Envía las variables al cliente
        res.json(Meteo);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/susta', async (req, res) => {
    try {
        // Obtiene las variables de HTanks
        const ST = await PerTanks.getSVariables();
        console.log(ST);
        // Envía las variables al cliente
        res.json(ST);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/', async (req, res) => {
    try {
        // Obtiene las variables de HTanks
        const Perdidas = await PerTanks.getPerdidas();
        console.log(Perdidas);
        // Envía las variables al cliente
        res.json(Perdidas);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error interno del servidor');
    }
})

module.exports = router;
