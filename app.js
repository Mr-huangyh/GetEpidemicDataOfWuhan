const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static('./html'));

var getAreaStat = () => {
    return axios.get('https://3g.dxy.cn/newh5/view/pneumonia').then((data) => {
        return data.data.split('.getAreaStat =')[1].split('}catch(e){}</script>')[0];
    })
}

var getImg = () => {
    return axios.get('https://3g.dxy.cn/newh5/view/pneumonia').then((data) => {
        return '{ "imgUrl"' + data.data.split('icsService = ')[1].split(',"summary')[0].split('"imgUrl"')[1] + '}';
    })
}

app.get('/',(req,res)=>{
    res.send();
})

app.get('/getImg', async (req, res) => {
    res.json(JSON.parse(await getImg()));
});

app.get('/getAreaStat', async (req, res) => {
    res.json(JSON.parse(await getAreaStat()));
});

app.listen(8888, () => {
    console.log('run in 8888');
});
