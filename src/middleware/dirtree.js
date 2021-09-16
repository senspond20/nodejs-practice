const PATH = require('path');
const dirTree = require("directory-tree");
const {publicViewsPath} = require('../config');
// const tree = dirTree(publicViewsPath);
console.log(publicViewsPath)

const tree = dirTree(publicViewsPath);
// const tree = dirTree(publicViewsPath, {extensions:/\.txt$/}, (item, PATH, stats) => {
    // console.log(item);
// });

console.log(tree);

//https://dev.to/peaonunes/loading-a-directory-as-a-tree-structure-in-node-52bg