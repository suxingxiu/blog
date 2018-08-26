// 导入express框架
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// 创建web服务器
const app = express();

// 开放静态资源目录
// 
app.use(express.static(path.join(__dirname, 'public')))

// 配置模板引擎
// 告诉模板引擎用哪个模板

app.engine('handlebars', exphbs({
    // 抽取公共部分
    partialsDir: [{
        dir: path.join(__dirname, 'views', 'home', 'partials')
    }, {
        dir: path.join(__dirname, 'views', 'admin', 'partials')
    }],
    // 抽取架构  架构目录
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'home'
}));

// 配置模板路径
app.set('views', path.join(__dirname, 'views'));
// 指定模板后缀
app.set('view engine', 'handlebars');

// 路由

app.get('/', (req, res) => {
    // 渲染模板--向客户端做出响应
    res.render('home/index');
})
app.get('/about', (req, res) => {
    // 渲染模板--向客户端做出响应
    res.render('home/about');
})
app.get('/article', (req, res) => {
    // 渲染模板--向客户端做出响应
    res.render('home/article');
})



// 监听3000端口
app.listen(3000, err => {
    if (!err) {
        console.log('服务器启动成功，请访问http：//localhost：3000')
    }

})