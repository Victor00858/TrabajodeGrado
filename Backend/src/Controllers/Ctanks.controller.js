const CTanks = require('../Models/CTanks');

const CTankCtrl = {};

CTankCtrl.getCtanks = async (req, res) => {
    const tanks = await CTanks.find();
    res.json(tanks);
};

CTankCtrl.getCtank = async ( req, res ) => {
    const tank = await CTanks.findById(req.params.id);
    res.json(tank);
};

module.exports = CTankCtrl;