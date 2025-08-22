const { config } = require('dotenv')
config({
    path:'.env'
})

const app = require('./src/app')
const { ConnectDB } = require('./src/config/db.config')
const port = process.env.PORT || 8000
//const userRoutes = require("./src/router/userRoutes");
//app.use("/api/user", userRoutes);

ConnectDB()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
