const FixDepositService = require("../service/FDService");

class FixDepositController {

    static AddNewFD = async (req, res, next) => {
        try {
            const res_obj = await FixDepositService.AddNewFD(req.body, req.user);
            res.status(201).json(res_obj);
        } catch (error) {
            next(error);
        }
    }

    static getAllFD = async (req, res, next) => {
        try {
            const res_obj = await FixDepositService.getAllFD(req.user);
            res.status(200).json(res_obj);
        } catch (error) {
            next(error);
        }
    }

    static getFDById = async (req, res, next) => {
        try {
            const res_obj = await FixDepositService.getFDById(req.user, req.params.id);
            res.status(200).json(res_obj);
        } catch (error) {
            next(error);
        }
    }

    static ClaimFDById = async (req, res, next) => {
        try {
            const res_obj = await FixDepositService.ClaimFDById(req.user, req.params.id);
            res.status(200).json(res_obj);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = FixDepositController;
