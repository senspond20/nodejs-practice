const router = require('express').Router();
const md = require('../middleware/mdparser');
const path = require('path');
const fs = require('fs')
const ejs = require("ejs");
const {publicViewsPath} = require('../config');
const routerList = require("../middleware/getfiles")

console.log("===========")
console.log(routerList)

let list =[];

const pushItem = (base, href, text)=>{
    list.push({
        base : base,
        href : href,
        text : text
    });
}

routerList.forEach(item =>{
    const baseurl = item.directory;
    const filepath = path.join(publicViewsPath, baseurl);
    const files = fs.readdirSync(filepath);
    const htmlFiles = files.filter(file => path.extname(file).toLowerCase() ==='.html') 
    const mdFiles = files.filter(file => path.extname(file).toLowerCase() ==='.md')

    // html 
    htmlFiles.forEach(filename=>{
        // const basename = path.basename(filename, '.html');
        let pathName = encodeURI(`${baseurl}/${filename}`); 
        // console.log(pathName)
        router.get(`${pathName}`, (req, res,next)=>{
            res.render(`${filepath}/${filename}`)
        })
        pushItem(item, pathName, filename );
    });

    // markdown
    mdFiles.forEach(filename=>{
       // const basename = path.basename(filename, '.md');
        let pathName = encodeURI(`${baseurl}/${filename}`); // ( baseurl === "") ? `${baseurl}/${basename}`  :  `/${baseurl}/${basename}`;
        // console.log(pathName)
        const file = fs.readFileSync(`${filepath}/${filename}`).toString()
        const html = md.render(file);

        const layoutFormat = fs.readFileSync(`${publicViewsPath}/markrender.ejs`, "utf8");

        const contentHtml = ejs.render(layoutFormat, {
            title: filename,
            contents: html,
        });

        router.get(`${pathName}`, (req, res,next)=>{
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(contentHtml);
            res.end();
        })

        pushItem(item, pathName, filename);
    });
    pushItem(item, pathName, filename);
})



console.log(list)


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
    res.render(`${publicViewsPath}/index.ejs`,
        {
            test : "hello",
            list : list
        }
    )
})

router.get("/api/routes",(req,res,next)=>{
    res.json({base : routerList, items : list});
})



module.exports = router;