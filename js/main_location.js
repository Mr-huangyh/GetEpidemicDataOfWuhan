(function () {
    let dataList = [], allData = [], dateflag = '', dataflag = 0;
    let myChart = echarts.init(document.getElementById('main'), null, { renderer: 'canvas' });
    myChart.setOption({
        title: {
            text: '深圳肺炎感染人数回顾',
            subtext: '数据来源：深圳市政府数据开放平台',
            sublink: 'https://opendata.sz.gov.cn/'
        },
        tooltip: {
            formatter: function (params, ticket, callback) {
                return params.name + '<br />' + dateflag + ' ' + params.seriesName + '：' + params.value
            }//数据格式化
        },
        visualMap: {
            min: 0,//最小值
            // max: ,//最大值
            show: false,//图注是否显示
        },
        dataRange: {
            x: 'left',
            y: '50% + 1px',
            splitList: [//设置值域对应颜色
                { start: 100, label: '>100', color: '#4f070d' },
                { start: 81, end: 100, label: '81-100', color: '#811c24' },
                { start: 61, end: 80, label: '61-80', color: '#cb2a2f' },
                { start: 41, end: 60, label: '41-60', color: '#e55a4e' },
                { start: 21, end: 40, label: '21-40', color: '#f59e83' },
                { start: 1, end: 20, label: '1-20', color: '#fdebcf' },
                { end: 0, label: '0', color: '#BFBFBF' }
            ],
            textStyle: {
                color: '#3899FF' // 值域文字颜色
            },
            selectedMode: false,
            color: ['#E0022B', '#E09107', '#A3E00B']
        },
        series: [//显示数组
            {
                name: '感染人数',
                type: 'map',
                mapType: 'SZ',
                data: dataList,
                label: {
                    show: true,
                    color: 'rgba(0,0,0,0.7)',
                    formatter: '{b}\n{c}'
                },
                itemStyle: {
                    normal: {
                        borderWidth: '2',
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                    },
                    emphasis: {
                        areaColor: '#F3B329',//鼠标选择区域颜色
                        shadowOffsetX: 0,//阴影偏移量x
                        shadowOffsetY: 0,//阴影偏移量y
                        shadowBlur: 20,//阴影扩散值
                        borderWidth: 1,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'//阴影颜色
                    }
                },
            }
        ],

    });
    myChart.showLoading();
    //切换数据 调用方法 fn(arr) arr:源数组
    let getToAnotherData = (data, data2 = { data: 1 }) => {
        showData(data.data, data2.data);
        dateflag = showDate.innerHTML = data.date.replace('^', ' ');
        myChart.setOption({
            series: [{
                data: data.data
            }]
        });
    }
    let showData = (arr, arr2) => {
        let text = '', moreShowData = document.querySelector('#moreShowData');
        if (arr2 == 1) {
            for (let i of arr) {
                console.log()
                text += i.name + ':' + i.value + '\n';
            }
        } else {
            for (let i of arr) {
                for (let j of arr2) {
                    if (i.name == j.name) {
                        text += i.name + ':' + i.value + ((i.value * 1 - j.value * 1) > 0 ? ' ↑' + (i.value * 1 - j.value * 1) : ((i.value * 1 - j.value * 1) < 0 ? ' ↓' + -1 * (i.value * 1 - j.value * 1) : '')) + '\n';
                    }
                }
            }
        }
        moreShowData.innerText = text;
    }
    // 监听滑块
    let range = document.querySelector('[type = range]'),
        showDate = document.querySelector('#showDate');
    range.onmousemove = (e) => {//电脑端
        dataflag = e.target.value;
        getToAnotherData(allData[e.target.value], allData[e.target.value * 1 + 1]);
    }
    range.ontouchmove = (e) => {//手机端
        dataflag = e.target.value;
        getToAnotherData(allData[e.target.value], allData[e.target.value * 1 + 1]);
    }
    //首次获取数据
    let getFirstData = () => {//w3cSchool code
        allData = deData(testJson.data).arr;
        range.setAttribute('max', allData.length - 1);
        getToAnotherData(allData[0],allData[1]);
        myChart.hideLoading();
    }
    let showAuthor = () => {
        document.querySelector('.author').innerHTML = '<p>author <a href="http://www.huangyh.top">@HuangYH</a></p><p>power by <a href="https://www.echartsjs.com/">echarts</a></p>'
    }
    getFirstData();
    showAuthor();
})();