const path = require('path');
const fs = require('fs')
const url = require('url');
const {publicViewsPath} = require('../config');

let routerList = [];


function getFilesfromPath(filePath){
    const files = fs.readdirSync(filePath);
    console.log(files)
    files.forEach((item)=>{
        const nPath = path.join(filePath,item);
        // 디렉토리 이면
        if(fs.lstatSync(nPath).isDirectory()){
            const t = nPath.replace(publicViewsPath, "");
            const urlPath = url.pathToFileURL(t).href.replace(/file:\/+.*:/g,"");
            routerList.push(urlPath);
            // console.log("=============")
            // console.log(item)
            // console.log(nPath)
            getFilesfromPath(nPath) // 재귀호출  
        }
    })   
}

function getFileList(){
    routerList.push("");
    getFilesfromPath(publicViewsPath);
}

getFileList();

module.exports = routerList;

