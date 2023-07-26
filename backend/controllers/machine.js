const { Machine, Way } = require('../models');
const { Op } = require("sequelize");

exports.readMachine = async (req, res, next) => {
    try {
        const machine = await Machine.findOne({ where: { part: req.params.id }});
        if (!machine) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        const partResult = await Machine.findAll({
            where: {
                part: req.params.id,
            },
            attributes: ['part', 'name', 'img'],
        });
        console.log(typeof(partResult));
        return res.json(partResult);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
};

exports.readWorkOutWay = async (req, res, next) => {
    try {
        const workoutway = await Way.findAll({
            where: {
                part: req.params.id,
                machinename: {
                    [Op.or]: req.body.machineList,
                }
            },
            include: [{
                model: Machine,
                where: { part: req.params.id },
                attributes: ['part', 'img'],
            }]
        });
        res.json(workoutway);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
};