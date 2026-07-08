const { Router } = require('express');
const router = Router();

const UserCtrl = require('../Controllers/user.controller');


//router.get('/', (req, res) => res.send('Hello world'));

router.post('/', UserCtrl.postUser);

module.exports = router;
