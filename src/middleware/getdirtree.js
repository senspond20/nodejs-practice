const fs = require('fs')
const path = require('path')
const {publicViewsPath} = require('../config');
console.log(publicViewsPath)
// console.log(fs.readdirSync(publicViewsPath));

function TreeNode(path, children){
    this.path = path;
    this.children = children;
}

function buildTree(rootPath) {
    const root = new TreeNode(rootPath,new Array);

    const stack = [root];
  
    while (stack.length) {
      const currentNode = stack.pop();
  
      if (currentNode) {
        // const children = fs.readdirSync(currentNode.path);
        console.log("===");
        console.log(currentNode.path)
        for (let child of children) {
          const childPath = `${currentNode.path}/${child}`;
          const childNode = new TreeNode(childPath);
          currentNode.children.push(childNode);
  
        // //   if (fs.statSync(childNode.path).isDirectory()) {
        //     // stack.push(childNode);
        // //   }
        }
      }
    }
  
    return root;
}

console.log(buildTree(publicViewsPath))
