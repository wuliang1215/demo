let express = require('express')
let router = express.Router()


let equilist = {
    code: 20000,
    data: [
        {
            id: 1,
            hosp_type:'hospital1',
            hospital: "浙江省人民医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            typeid: 1.5,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 2,
            hosp_type:'hospital1',
            hospital: "浙江省人民医院",
            city: "杭州",
            local: "下城区",
            equi_type: "CT",
            type_number: "nmuby",
            typeid: 120,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 3,
            hosp_type:'hospital2',
            hospital: "协和医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            typeid: 1.5,
            buytime: "2019-10-12 12:23",
            safetime: false,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 4,
            hosp_type:'hospital2',
            hospital: "协和医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "QZMD50",
            typeid: 1.5,
            buytime: "2019-10-12 12:23",
            safetime: false,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 5,
            hosp_type:'hospital1',
            hospital: "浙江省人民医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "CMD",
            typeid: 1.5,
            buytime: "2019-10-12 12:23",
            safetime: false,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 6,
            hosp_type:'hospital1',
            hospital: "浙江省人民医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            typeid: 1.5,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 7,
            hosp_type:'hospital3',
            hospital: "浙江大学附属第二人民医院",
            city: "杭州",
            local: "上城区",
            equi_type: "CT",
            type_number: "nmuby",
            typeid: 120,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 8,
            hosp_type:'hospital4',
            hospital: "浙江省人民医院",
            city: "义乌市",
            local: "嘉兴区",
            equi_type: "CT",
            type_number: "nmuby",
            typeid: 80,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "GE",
            shop_number: "EYBU-SADJ-2237-ERO"
        }
        ,
        {
            id: 9,
            hosp_type:'hospital6',
            hospital: "浙江省中山医院",
            city: "杭州",
            local: "西湖区",
            equi_type: "MRI",
            type_number: "cmd",
            typeid: 2.5,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 10,
            hosp_type:'hospital1',
            hospital: "浙江省人民医院",
            city: "义乌市",
            local: "嘉兴区",
            equi_type: "CT",
            type_number: "nmuby",
            typeid: 80,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "GE",
            shop_number: "EYBU-SADJ-2237-ERO"
        },
        {
            id: 11,
            hosp_type:'hospital1',
            hospital: "浙江省人民医院",
            city: "义乌市",
            local: "嘉兴区",
            equi_type: "CT",
            type_number: "nmuby",
            typeid: 80,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "GE",
            shop_number: "EYBU-SADJ-2237-ERO"
        },
        {
            id: 12,
            hosp_type:'hospital1',
            hospital: "浙江省人民医院",
            equi_type: "CT",
            type_number: "nmuby",
            typeid: 80,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "GE",
            shop_number: "EYBU-SADJ-2237-ERO"
        }
    ]
}

let modulelist = {
    code: 20000,
    data: [
        {
            value: "type1",
            label: "nmuby"
        },
        {
            value: "type2",
            label: "MDF"
        },
        {
            value: "type3",
            label: "cab"
        },

    ]
}

let mrilist = {
    code: 20000,
    data: [
        {
            value: "mri1",
            label: "0.5"
        },
        {
            value: "mri2",
            label: "1"
        },
        {
            value: "mri3",
            label: "1.5"
        },
        {
            value: "mri4",
            label: "2.5"
        },

    ]
}

let ctlist = {
    code: 20000,
    data: [
        {
            value: "ct1",
            label: "40"
        },
        {
            value: "ct2",
            label: "60"
        },
        {
            value: "ct3",
            label: "80"
        },
        {
            value: "ct4",
            label: "120"
        },

    ]
}


let equitype = {
    code: 20000,
    data: [
        {
            value: "全部",
            label: "全部"
        },
        {
            value: "MRI",
            label: "MRI"
        },
        {
            value: "CT",
            label: "CT"
        }
    ]
}

let equibuss = {
    code: 20000,
    data: [
        {
            value: "全部",
            label: "全部"
        },
        {
            value: "厂商1",
            label: "飞利浦"
        },
        {
            value: "厂商2",
            label: "迈瑞"
        },
        {
            value: "厂商3",
            label: "GE"
        },
        {
            value: "厂商4",
            label: "德尔格"
        },
        {
            value: "厂商5",
            label: "西门子"
        }
    ]
}

let searchlist = {
    code: 20000,
    data: [
        {
            id: 1,
            hospital: "浙江省人民医院1",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 2,
            hospital: "浙江省人民医院1",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 3,
            hospital: "浙江省人民医院1",
            city: "杭州",
            local: "下城区",
            equi_type: "",
            type_number: "nmuby",
            data: "80排",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 4,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        }
        ,
        {
            id: 5,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 6,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 7,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 8,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 9,
            hospital: "浙江省人民医院1",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 10,
            hospital: "浙江省人民医院1",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 11,
            hospital: "浙江省人民医院1",
            city: "杭州",
            local: "下城区",
            equi_type: "",
            type_number: "nmuby",
            data: "80排",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 12,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        }
        ,
        {
            id: 13,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 14,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 15,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 16,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        },
        {
            id: 17,
            hospital: "浙江大学医学院附属妇产科医院",
            city: "杭州",
            local: "下城区",
            equi_type: "MRI",
            type_number: "nmuby",
            data: "1.5t",
            totaltime: 130,
            buytime: "2019-10-12 12:23",
            safetime: true,
            shopby: "飞利浦",
            shop_number: "EYBU-SADJ-2337-ERO"
        }
    ]
}




router.route('/list').get((req, res) => {
    let enddata = {
        code : 20000,
    }
    let list = equilist.data.filter((item) => {
        let list = req.query.list
        let hospital = req.query.hospital
        if(list === '全部' && hospital === '全部'){
            return equilist
        }
        else if(hospital === '全部' && !(list === '全部')){
            return item.equi_type == list
        }
        else if(!(hospital === '全部') && list === '全部'){
            return item.hosp_type == hospital
        }
        else{
            return item.equi_type == list && item.hosp_type == hospital
        }
    })
    enddata['data'] = list
    
    res.send(enddata)
})

router.route('/module').get((req, res) => {
    res.send(modulelist)
})

router.route('/mri').get((req, res) => {
    res.send(mrilist)
})

router.route('/ct').get((req, res) => {
    res.send(ctlist)
})

router.route('/buss').get((req, res) => {
    res.send(equibuss)
})

router.route('/type').get((req, res) => {
    res.send(equitype)
})


router.route('/searchlist').get((req, res) => {
    res.send(searchlist)
})

module.exports = router
