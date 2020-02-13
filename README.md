# 深圳市疫情回顾 (每日确诊病例所在行政区域)

## 声明

> 本项目只做个人学习研究之用，不得做其他用途，如做其他用和本人无关。


## <p id="sjly">数据来源</p>

 疫情数据   
> &emsp;深圳市政府数据开放平台 : https://opendata.sz.gov.cn/

地图数据(geoJson)  
> &emsp; 阿里DataV : http://datav.aliyun.com/tools/atlas/  
> &emsp; 高德地图API : https://lbs.amap.com/api/javascript-api/example/district-search/draw-district-boundaries

## 使用方法

> \# git clone -b SZ-Map https://github.com/Mr-huangyh/GetEpidemicDataOfWuhan.git  

1. 本地的版本可以查看 `index_location.html` 版本  
2. 有Apache/nginx/VsCode(安装了`liveServer`)的可以部署一下 `index_online.html` 版本  

版本差异 : `location` 版本中数据是静态加载的(数据在head里面)，`online` 版本中数据是动态加载的(目前是从testdata.json获取数据，后续会整理(更新)出其他获取数据的方法)

## 实现思路

 1. 获取疫情数据资料 [数据来源](#sjly "数据来源")  
 2. 寻找建模工具 [echarts](https://www.echartsjs.com/ "echarts") ，并建模   
 2.1 获取geoJSON(方法挺多，我这次要获取行政区域划分，主要依靠阿里的DataV和高德的API，非常感谢~)  
 2.2 了解 `echarts` 的配置，可以快速创建地图  
 2.3 依据从数据开放平台获取到的数据，写出了 `deData.js` 将源转变为 `echarts` 所能应用的数据   
 3. 增加拖动条使数据能够在用户的操作下切换  
 3.1 拖动条-当前使用 `input` 的 `type="range"` (后期可能会做的好看点的)  
 3.1.1 使用 `onmousemove` 和 `ontouchmove` 监听用户操作，切换数据  
 3.2 建立复用方法 `getToAnotherData()` 导入数据即可使地图切换新的数据  
 3.2.1 [数据样例1](#qhsj "切换数据") (方法封装在main里)  
 3.3 所有数据保存在 `allData` 中，这样获取数组会方便很多  
 4. 美化页面

### 程序未完善/可能出错

> 1. 数据源 : 目前 `online` 版本 和 `location` 版本都采用本地数据源，后续更新 `online` 版本数据源。  
> 2. 页面美化不足，代码片段凌乱，欢迎各位大神来指导帮忙改善当前项目。

<h3 align="center">项目效果</h3>

<div align="center">
    <img src="https://raw.githubusercontent.com/Mr-huangyh/GetEpidemicDataOfWuhan/SZ-Map/README_IMG/1.gif">
</div>

### 数据样例
1.切换数据 <a id="qhsj"></a>
 ``` javascript 
    //main.js main_location.js
    let newData = {
        date: "2月12日^24时"
        data: [
            {name: "罗湖区", value: 29},
            {name: "坪山区", value: 7}
        ]
    }

    getToAnotherData(newData);
 ```  