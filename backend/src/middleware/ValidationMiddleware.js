const { validationResult } = require("express-validator")
const ApiError = require("../utils/ApiError")

const ValidationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 400,
            msg: errors.array()[0].msg
        });
    }
    next();
}

/*const ValidationMiddleware = async(req,res,next)=>{
    const result = validationResult(req)
    if(!result.isEmpty()){
        throw new ApiError(400,result.array()[0].msg)

    }
    next()
}*/

module.exports = ValidationMiddleware