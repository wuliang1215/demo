let util = require('../util/util.js')
let express = require('express')
let router = express.Router()

router.get('/detail',function(req,res){
    res.json(
        {
            success:true,
            data: util.repairZero(8)
            // data: 08
        }
    )
})

module.exports = router