const AuthService = require("../service/AuthService");

exports.loginuser = (req, res) => {
  const result = AuthService.loginUser(req.body);
  res.send(result);
};


class AuthController {
    static async loginuser(req, res) {
        const res_obj = await AuthService.loginuser(req.body);
        res.status(200).send(res_obj);
    }

    static async registerUser(req,res){
        const res_obj = await AuthService.registerUser(req.body)
        res.status(201).send(res_obj)
    }

    static async profileUser(req,res){
        const res_obj = await AuthService.profileUser(req.user);
        res.status(200).send(res_obj)
        const atmCards = await ATMmodel.find({ user });
        profile_obj['atmCards'] = atmCards;
        return { ...userd.toObject(), ...profile_obj };
    }
}
module.exports = AuthController