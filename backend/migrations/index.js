require('dotenv').config()
const db = require('../models')

db.sequelize.sync()
.then(console.log("Migration Started"))
.catch(err => console.log(err))