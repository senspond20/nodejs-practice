const path = require('path');
const fs = require('fs')
const url = require('url');
const {publicViewsPath} = require('../config');

let directoryList = [];

function getFilesfromPath(filePath){
    const files = fs.readdirSync(filePath);
    console.log(files)
    files.forEach((item)=>{
        const nPath = path.join(filePath,item);
        // 디렉토리 이면
        if(fs.lstatSync(nPath).isDirectory()){
            const t = nPath.replace(publicViewsPath, "");
            const urlPath = url.pathToFileURL(t).href.replace(/file:\/+.*:/g,"");
            directoryList.push(urlPath);
            // console.log("=============")
            // console.log(item)
            // console.log(nPath)
            getFilesfromPath(nPath) // 재귀호출  
        }
    })   
}
let routerList = [];

function getFileList(){
    directoryList.push("");
    getFilesfromPath(publicViewsPath);
    
    let rid = 0;
    let pid = 0;
    let temp ;

    directoryList.forEach(i=>{
        if(i.includes(temp) && rid !== 0){
            pid = rid-1;
        }else{
            pid = 0;
        }
        routerList.push({
            rid : rid,
            pid : pid,
            directory : i
        })
        temp = i;
        rid++;
    })
    console.log(routerList)
}

getFileList();

module.exports = routerList;

