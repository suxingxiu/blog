// 导入express框架
const express = require('express');
// 创建web服务器
const app = express();

// 路由

app.get('/', (req, res) => {

    res.send('Hello,Blog')



})



// 监听3000端口
app.listen(3000, err => {
    if (!err) {
        console.log('服务器启动成功，请访问http：//localhost：3000')
    }

})