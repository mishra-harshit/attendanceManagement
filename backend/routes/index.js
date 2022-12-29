const express = require('express')
const { appConfig } = require('../configs')
const routesV1 = require('./v1')
const router = express.Router({mergeParams:true})

router.use('/',(req,res)=>{
    res.json({version: appConfig.version})
})

router.use('/v1',routesV1)

module.exports = router