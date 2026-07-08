const Users = require('../Models/Users');

const UserCtrl = {};

const jwt = require('jsonwebtoken');

UserCtrl.postUser = async (req, res) => {
    const { usuario, password } = req.body;
    const user = await Users.findOne({usuario});

    if (!user) return res.status(401).send('El usuario no existe');
    if ( user.password !== password) return res.status(401).send('Contraseña incorrecta');

    const token = jwt.sign({ _id: user._id }, 'secretKey')
    return res.status(200).json({ token });
};

function verifyToken( req, res, next) {
}

module.exports = UserCtrl;