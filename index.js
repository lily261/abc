require('dotenv').config();
const express = require('express')
const app = express()
app.use(express.json())
const db = require('./models')
let port = process.env.PORT;

//ROUTERS

const usersRouter = require('./routes/userRoute')
app.use("/users", usersRouter);

db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log('Server running on port ' + port)
    })
})


