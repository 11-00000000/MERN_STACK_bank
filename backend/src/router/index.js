const express = require("express")
const router = express.Router()
const AuthRoute = require("./auth")
const AmountRoute = require("./amount")
const FDRoute = require("./fd")
const ATMCards = require("./atm-card")
//const AccountRoute = require("./account")
const routes = [{
    path: '/auth',
    route: AuthRoute
},

{
    path: '/amount',
    route: AmountRoute
},

{
    path: '/fd',
    route: FDRoute
},

{
    path: '/atm-card',
    route: ATMCards
},
/*{
    path: '/account',
    route: AccountRoute
}*/
]

routes.forEach((cur) => {
  router.use(cur.path, cur.route)
})

module.exports = router