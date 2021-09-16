const router = require('express').Router();
const url = require('url');

// require('')
const path = require('path');
const fs = require('fs')

const {publicHtmlPath} = require('../config');

function getFiles(filePath){
    const files = fs.readdirSync(filePath);
    console.log(files)
    files.forEach((item)=>{
        const nPath = path.join(filePath,item);
        if(fs.lstatSync(nPath).isDirectory()){
            const t = nPath.replace(publicHtmlPath, "");
            const urlPath = url.pathToFileURL(t).href.replace(/file:\/+.*:/g,"");
            routerList.push(urlPath);
            // console.log("=============")
            // console.log(item)
            // console.log(nPath)
            getFiles(nPath)  
        }
    })   
}

const list = []
const routerList = [];

routerList.push("")
getFiles(publicHtmlPath);

console.log("===========")
console.log(routerList)

routerList.forEach(baseurl =>{
    const filepath = path.join(publicHtmlPath, baseurl);
    const files = fs.readdirSync(filepath);
    const htmlFiles = files.filter(file => path.extname(file).toLowerCase() ==='.html') 


    htmlFiles.forEach(filename=>{
        const basename = path.basename(filename, '.html');

        let pathName = encodeURI(`${baseurl}/${basename}`); // ( baseurl === "") ? `${baseurl}/${basename}`  :  `/${baseurl}/${basename}`;
        // console.log(pathName)
       
        router.get(`${pathName}`, (req, res,next)=>{
            res.render(`${filepath}/${filename}`)
        })
        list.push(pathName);
    })


    
})


// console.log(files)
// const routesFile = files.filter(file => path.extname(file).toLowerCase() ==='.html')

// console.log(routesFile);
// const list = []

// routesFile.forEach(file=>{
//     const basename = path.basename(file, '.html');
//     router.get(`/${basename}`, (req, res,next)=>{
//         res.render(`${publicHtmlPath}/${file}`)
//     })
//     list.push(basename);
// })

router.get("/", (req, res,next)=>{
    res.render(`${publicHtmlPath}/index.ejs`,
        {
            test : "hello",
            list : list
        }
    )
})

router.get("/api/routes",(req,res,next)=>{
    res.json({base : routerList, item : list});
})



module.exports = router;