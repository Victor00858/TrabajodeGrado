const express = require('express');
const router = express.Router();

const CTank = require('../Controllers/Ctanks.controller');

router.get('/', CTank.getCtanks);
router.get('/:id', CTank.getCtank);

module.exports = router;