const express = require('express');
const app = express();
const axios = require('axios');

var getAreaStat = () => {
    return axios.get('https://3g.dxy.cn/newh5/view/pneumonia').then((data) => {
        return data.data.split('.getAreaStat =')[1].split('}catch(e){}</script><script id="getIndex')[0];
    })
}

app.get('/', async (req, res) => {
    res.json(eval (await getAreaStat()));
})

app.listen(8888, () => {
    console.log('run in 8888');
})
