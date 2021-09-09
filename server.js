const app = require('./src/app.js')
require('dotenv').config();

const PORT = process.env.PORT || 3000;
// 서버
app.listen(PORT, ()=>{
    console.log(`https://localhost:${PORT}`)
})