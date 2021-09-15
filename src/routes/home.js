const router = require('express').Router();

// require('')
const path = require('path');
const fs = require('fs')

const {publicHtmlPath} = require('../config');

const files = fs.readdirSync(publicHtmlPath);
const routerList = [];

routerList.push("")

getFiles(publicHtmlPath);
// files.forEach((item)=>{
//     if(fs.lstatSync(path.join(publicHtmlPath,item)).isDirectory()){
//         routerList.push(item);
        
//     }

// });

function getFiles(filePath){
    const files = fs.readdirSync(filePath);
    console.log(files)
    files.forEach((item)=>{
        const nPath = path.join(filePath,item);
        if(fs.lstatSync(nPath).isDirectory()){
            routerList.push(nPath);
            console.log("=============")
            console.log(item)
            console.log(nPath)
            getFiles(nPath)  
        }
    })   
}

const list = []
console.log("===========")
console.log(routerList)


// routerList.forEach(baseurl =>{
//     const filepath = path.join(publicHtmlPath, baseurl);
//     const files = fs.readdirSync(filepath);
//     const routesFile = files.filter(file => path.extname(file).toLowerCase() ==='.html') 


//     routesFile.forEach(filename=>{
//         const basename = path.basename(filename, '.html');

//         let pathName = ( baseurl === "") ? `${baseurl}/${basename}`  :  `/${baseurl}/${basename}`;
//         // console.log(pathName)
    
//         router.get(`${pathName}`, (req, res,next)=>{
//             res.render(`${filepath}/${filename}`)
//         })
//         list.push(pathName);
//     })
// })


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




module.exports = router;