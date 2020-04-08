let express = require('express')
let router = express.Router()
let util = require('../util/util')


const constantRoutes = [
    {
      path: '/',
      component: () => import('@/view/login/login'),
      hidden: true
    },
    {
      path: '/equipment',
      component: () => import('@/layout/mian'),
      redirect: '/equipment/index',
      children: [
        {
          path: 'index',
          component: () => import('@/view/equipment/equipment'),
          name: '设备总览',
          meta: { 
            title: '设备总览',
            icon: 'excel'
          }
        }
      ] 
    },
    {
      path: '/sys/',
      component: () => import('@/layout/mian'),
      hidden:true,
      children: [
        {
          path: 'document',
          component: () => import('@/view/equipment/documents/document'),
          name: '设备明细',
          meta: { title: '设备明细'}
        }
      ]
    },
  ]
  
const asyncRoutes = [
    {
      path: '/sys/',
      component: () => import('@/layout/mian'),
      redirect: '/totalwork/total-work',
      // alwaysShow: true, // will always show the root menu
      name: '统计分析',
      meta: {
        title: '统计分析',
        icon: 'excel'
      },
      children: [
        {
          path: 'totalwork',
          component: () => import('@/view/totalwork/total-work'),
          name: '工作情况',
          meta: {
            title: '工作情况',
            // roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        {
          path: 'reservation',
          component: () => import('@/view/reservation/reservation'),
          name: "预约情况",
          meta: {
            title: '预约情况'
            // if do not set roles, means: this page does not require permission
          }
        },
        {
          path: 'monitor',
          component: () => import('@/view/monitoringsite/mon-site'),
          name: '部位类型',
          meta: {
            title: '部位类型',
          }
        },
        {
          path: "peaktime",
          component: () => import('@/view/peaktime/peak-time'),
          meta: {
           title: '工作高峰',
           roles: ['superadmin'],
          }
        },
      ]
    },
    {
      path: '/setting',
      component: () => import('@/layout/mian'),
      children: [
        {
          path: '',
          component: () => import('@/view/setting/setting'),
          name: '系统设置',
          meta: { 
            title: '系统设置',
            icon: 'excel',
            roles: ['superadmin','admin'],
          }
        }
      ]
    },
  ]

const routes = util.deepClone([...constantRoutes, ...asyncRoutes])

let roles = {
    code:20000,
    data:[
        {
          roles: 'superadmin',
          name: 'superadmin',
          code:"111111",
          title:"寻常的落叶",
          description: 'Super Administrator. Have access to view all pages.',
          routes: routes
        },
        {
          roles: 'admin',
          name: 'admin',
          code:"222222",
          title:"一眼的春天",
          description: 'Normal Editor. Can see all pages except permission page',
          routes: routes.filter(i => i.path !== '/setting')
        },
        {
          roles: 'visitor',
          name: 'visitor',
          code:"444444",
          title:"一壶的水",
          description: 'Just a visitor. Can only see the home page and the document page',
          routes: [{
            path: '/equipment',
            component: () => import('@/layout/mian'),
            redirect: '/equipment/index',
            children: [
              {
                path: 'index',
                component: () => import('@/view/equipment/equipment'),
                name: '设备总览',
                meta: { 
                  title: '设备总览',
                  icon: 'excel'
                }
              }
            ] 
          },]
        }
      ]
}

router.route('/roles').get((req, res) => {
    res.send(roles)
})

router.route('/routes').get((req, res) => {
    let routesdata = {
        code:20000
    }
    routesdata['data'] = routes
    res.send(routesdata)

})

router.route('/addroles').post((req, res) => {
    // console.log(req.body)
    let resdata = {
        code:20000,
        status: 'success'
    }
    resdata['data'] = req.body
    res.send(resdata)

})

router.route('/addroles/[A-Za-z0-9]').put((req, res) => {
    let resdata = {
        code:20000,
        data:{
          status:'success',
        }
    }
    let index = roles.data.indexOf(req.body.id);
    let setdata = this.roles.splice(index + 1, 1,req.body.data)
    resdata['data'] = setdata
    res.send(resdata)
})


module.exports = router