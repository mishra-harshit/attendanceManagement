const express = require('express')
const { appConfig } = require('../configs')
const routesV1 = require('./v1')
const router = express.Router({mergeParams:true})

router.use('/',(req,res)=>{
    res.json({version: appConfig.version})
})


module.exports = router