let express = require('express')
let router = express.Router()

const res = {
    code:20000,
    data:[]
}

router.route('').get((req, res) => {
    res.send(res)
})



module.exports = router

// 数据接受的母版的内容