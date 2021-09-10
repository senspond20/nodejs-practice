const app = require('./app.js')
require('dotenv').config();

const PORT = process.env.PORT || 3000;
// 서버
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})