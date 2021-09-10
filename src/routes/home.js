const router = require('express').Router();

// require('')
const path = require('path');
const fs = require('fs')

const {publicHtmlPath} = require('../config');

const files = fs.readdirSync(publicHtmlPath);
const routesFile = files.filter(file => path.extname(file).toLowerCase() ==='.html')

const list = []
routesFile.forEach(file=>{
    const basename = path.basename(file, '.html');
    router.get(`/${basename}`, (req, res,next)=>{
        res.render(`${publicHtmlPath}/${file}`)
    })
    list.push(basename);
})

router.get("/", (req, res,next)=>{
    res.render(`${publicHtmlPath}/index.ejs`,
        {
            test : "hello",
            list : list
        }
    )
})




module.exports = router;