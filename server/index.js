let express = require('express')
let users = require('./user/user')
let role = require('./user/role')
let equipment = require('./equipment/equi-list')
let bodyparser = require('body-parser')
//创建实例
let app = express()

// content-type  application/json
app.use(bodyparser.json())

//content-type application/x-www-form-urlend
app.use(bodyparser.urlencoded({
  extended: false
}))



//静态目录
app.use('/', express.static('public'))

app.use('/user', users)

app.use('/role', role)

app.use('/equipment', equipment)


//程序的进入
app.listen(4000, function () {
  console.log("程序已经启动4000")
})