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

function formatInfoAndWriteToFile(fileInfoArr){
    let maxLengthOfPath = 0;
    let i;
    for(i = 0; i < fileInfoArr.length - 1; ++i){
        if(fileInfoArr[i+1][0].length > maxLengthOfPath){
            maxLengthOfPath = fileInfoArr[i+1][0].length;
        }
    }
    const maxLengthOfLine = maxLengthOfPath + 6;

    let numberOfDashes;
    let lengthOfPath;
    const text = fs.createWriteStream("sorted_files.txt");
    for(i = 0; i < fileInfoArr.length; ++i){
        lengthOfPath = fileInfoArr[i][0].length + (fileInfoArr[i][1].toString()).length;
        numberOfDashes = maxLengthOfLine - lengthOfPath;
        text.write(fileInfoArray[i][0] + "-".repeat(numberOfDashes) + fileInfoArray[i][1] + "bytes\n");
    }
}

const dirPath = process.argv[2];
const fileInfoObj = getFiles(dirPath);
const fileInfoArray = Object.entries(fileInfoObj);

fileInfoArray.sort((a, b) => a[1] - b[1]);

formatInfoAndWriteToFile(fileInfoArray);
