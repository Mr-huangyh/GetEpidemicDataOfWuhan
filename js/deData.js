var deData = (function () {
    //测试数组
    let data = [{//data 样式
        "lh_u": "29",
        "ps": "7",
        "qt": "24",
        "ns": "86",
        "gm": "10",
        "dp": "2",
        "lh_ua": "31",
        "ft": "71",
        "jzsj": "24时",
        "lg": "67",
        "yt": "6",
        "jzrq": "2月11日",
        "ba": "53"
    }, {
        "lh_u": "29",
        "ps": "6",
        "qt": "24",
        "ns": "85",
        "gm": "10",
        "dp": "2",
        "lh_ua": "31",
        "ft": "70",
        "jzsj": "24时",
        "lg": "62",
        "yt": "4",
        "jzrq": "2月10日",
        "ba": "52"
    }];
    // 地区代码对应中文
    let sjdzb = {
        'ns': '南山区',
        'ft': '福田区',
        'lg': '龙岗区',
        'ba': '宝安区',
        'lh_ua': '龙华区',
        'lh_u': '罗湖区',
        'ps': '坪山区',
        'gm': '光明区',
        'yt': '盐田区',
        'dp': '大鹏新区',
        'qt': '其他',
        'jzrq': '就诊日期',
        'jzsj': '就诊时间',
    }
    let turnToRight = (data) => {
        // 判断数组是否正确
        if (typeof data != 'object') { console.warn('warring'); return { status: 0 }; }
        let arrlist = [];
        data.forEach(e => {
            let arr = [];
            for (let i in e) {
                let item = {};
                if (i == "jzsj" || i == "jzrq") continue;
                item['name'] = sjdzb[i];
                item['value'] = e[i];
                arr.push(item);
            }
            arrlist.push({ 'date': e['jzrq'] + "^" + e['jzsj'], 'data': arr });
        });
        console.dir({ status: 1, 'arr': arrlist })
        return { status: 1, 'arr': arrlist };
    }
    // console.dir(turnToRight(data)); // Test code
    return turnToRight;
})();