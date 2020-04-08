let util = require('../util/util.js')
let express = require('express')
let request = require('request')
let router = express.Router()

router.get('/getopenid',function(req,res){
    request(
        {
            url:"https://api.weixin.qq.com/sns/jscode2session",
            qs:{
                appid:'wxbc3f6ed392cee608',
                secret:"0de8eb7fb450fb3cf74a3ad99d722e43",
                js_code: req.query.code,
                grant_type:'authorization_code'

            }
        },(err,response,body) => {
                    if(err){
                        return res.json(err)
                    }
                    res.json(JSON.parse(body))
        }
    )
})

module.exports = router