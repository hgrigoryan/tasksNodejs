const fs = require("fs");
const path = require("path");

function getFiles(dir){
    const files = fs.readdirSync(dir);
    let fileInfo = {};
    
    let currentPath;
    files.forEach((file) => {
        currentPath = path.join(dir, "/", file);
        if(fs.statSync(currentPath).isDirectory()){
            fileInfo = {...fileInfo, ...getFiles(currentPath)};
        }else{
            fileInfo[currentPath] = fs.statSync(currentPath).size;
        }
    })
    return fileInfo;
}

const dirPath = process.argv[2];
const fileInfoObj = getFiles(dirPath);
const fileInfoArray = Object.entries(fileInfoObj);

fileInfoArray.sort((a, b) => a[1] - b[1]);

let i;
const text = fs.createWriteStream("sorted_files.txt");
for(i = 0; i < fileInfoArray.length; ++i){
    text.write(fileInfoArray[i][0] + "--------" + fileInfoArray[i][1] + "bytes\n"); 
}
