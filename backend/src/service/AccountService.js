const AccountModel = require("../models/Account.model");

class AccountService {
    static getUserAccounts = async (user) => {
        const accounts = await AccountModel.find({ user: user._id });
        if (!accounts.length) {
            throw new Error("No account found, please create one");
        }
        return accounts;
    }
}

module.exports = AccountService
