const router = require('express').Router();

// require('')
const path = require('path');
const fs = require('fs')

const {publicPath} = require('../config');

const files = fs.readdirSync(publicPath);
// console.log(files)
router.get("/", (req, res,next)=>{
    res.render(`${publicPath}/list.html`)
})

const routesFile = files.filter(file => path.extname(file).toLowerCase() ==='.html')

routesFile.forEach(file=>{
    const basename = path.basename(file, '.html');

    console.log(basename)
    router.get(`/${basename}`, (req, res,next)=>{
        res.render(`${publicPath}/${file}`)
    })
})






module.exports = router;