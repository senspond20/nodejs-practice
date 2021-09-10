const express = require('express');
const app = express();
// const {publicPath} = require('./src/config')
const {homeRoutes, userRoutes} = require('./src/routes')
const path = require('path')
const {timelogMd} = require('./src/middleware')
// 화면 engine을 ejs로 설정 

app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'public')));

// app.use(publicPath, express.static('public'));

app.use(timelogMd);



// 라우터
app.use(homeRoutes);

// 라우터 - API

app.use("/api/user", userRoutes);






// 라우터
// app.get("/",(req,res,next)=>{
//     res.json({msg :`안녕하세요`})
//     // next();
// })

// // 라우터
// app.get("/:id", timelog, (req,res,next)=>{
//     res.json({msg :`안녕하세요${req.params.id}`})
//     next();
// })

module.exports = app;
