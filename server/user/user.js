let express = require('express')
let router = express.Router()

let users = [
    {
      id: 1,
      code:20000,
      usertitle: "管理",
      username: "admin",
      password: "111111",
      token: "admin_token"
    },
    {
      id: 2,
      code:20000,
      usertitle: "普通",
      username: "editor",
      password: "222222",
      token: "user_token"
    },
    {
      id: 3,
      code:20000,
      usertitle: "超级",
      username: "superadmin",
      password: "333333",
      token: "super_token"
    }
  ]

let logout = {
  code: 20000,
  data: 'success'
}

let userinfo = [
    {
      id: 1,
      code:20000,
      roles: ['admin'],
      hospital: [
        {
          value: '全部',
          label: '全部医院'
        },
        {
          value: 'hospital1',
          label: '浙江省人民医院'
        },{
          value: 'hospital2',
          label: '协和医院'
        },],
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: '小进',
      token: "admin_token",
    },
    {
      id: 2,
      code:20000,
      roles: ['editor'],
      hospital: [
        {
          value: '全部',
          label: '全部医院'
        },{
          value: 'hospital1',
          label: '浙江省人民医院'
        }, {
          value: 'hospital3',
          label: '浙江大学附属第二人民医院'
        }],
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: '小泽',
      token: "user_token"
    },
    {
      id: 3,
      code:20000,
      roles: ['superadmin'],
      hospital: [
        {
          value: '全部',
          label: '全部医院'
        },{
          value: 'hospital1',
          label: '杭州市第一人民医院'
        }, {
          value: 'hospital2',
          label: '浙江大学附属第二人民医院'
        }, {
          value: 'hospital3',
          label: '浙江大学附属第一人民医院'
        }, {
          value: 'hospital4',
          label: '邵逸夫医院'
        }, {
          value: 'hospital5',
          label: '浙江省人民医院'
        }],
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: '泽进',
      token: "super_token"
    }
 ]

router.route('/login').post((req, res) => {
    console.log(req.body)
    let user = users.find((item) => {
      return item.username == req.body.username && item.password == req.body.password
    })
    res.json(user ? user : {})
})

router.route('/logout').post((req, res) => {
  res.send(logout)
})


router.route('/info').get((req, res) => {
  let info = userinfo.find((item) => {
    return item.token == req.query.token
  })
  res.json(info ? info : {})
})

module.exports = router