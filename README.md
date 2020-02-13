# 获取武汉疫情数据

## 声明

> 本项目只做个人学习研究之用，不得做其他用途，如做其他用和本人无关。

## 分支

1. SZ-Map [切换分支](https://github.com/Mr-huangyh/GetEpidemicDataOfWuhan/tree/SZ-Map "SZ-Map")  
深圳疫情历史数据 (各行政区域确诊人数) 回顾  


## 数据来源

> 丁香医生 https://3g.dxy.cn/newh5/view/pneumonia

## 使用方法

> \# git clone https://github.com/Mr-huangyh/GetEpidemicDataOfWuhan.git  
\# npm install axios  
\# npm install express  
\# node app.js  
访问 http://127.0.0.1:8888/

## 实现方法

> 后端：爬取网页数据，进行整理，未使用正则，使用 [split()](https://www.w3school.com.cn/js/jsref_split.asp) 方法，强行分割，取出需要数据做成api接口。  
前端：调用API实现页面加载.

### 程序未完善/可能出错

> 1.数据源：因为使用的方法为，强行分割，可能数据源格式，被开发者修改，可能导致后端不能正常处理数据，导致报错(需要不断更新获取数据方式)。  
2.图片数据：原网页上的图片由原本的图片式加载方式，已转变为canvas加载方式，可能是接口未删除，目前可以在页面中获取图片数据。

<h3 align="center">项目效果</h3>

<div align="center">
    <img src="https://raw.githubusercontent.com/Mr-huangyh/GetEpidemicDataOfWuhan/master/README_IMG/1.png">
</div>