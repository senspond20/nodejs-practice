// 미들웨어
const timelogMd = (req,res,next)=>{
    console.log('Time', Date.now());

    // 인증
    if(req.params.id  == 5){
        res.json({msg :"back"})
    }
    next();
}
// app.use(timelog)

module.exports = timelogMd;