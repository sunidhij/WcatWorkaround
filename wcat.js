
// #!/usr/bin / env node
const fs = require("fs")
const SObj = require('./Commands/-s')
const BObj = require('./Commands/-b')
const NObj = require('./Commands/-n')

//input from command line
let inputArr = process.argv.slice(2)
// console.log(inputArr)

//To identify options and files
let optionsArr = []
let filesArr = []
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i][0];
    if (firstChar == "-")   optionsArr.push(inputArr[i]);
    else                    filesArr.push(inputArr[i])
}

//check if both -n and -b are present simultaneously
let isBothPresent = optionsArr.includes("-n") && optionsArr.includes("-b")
if (isBothPresent) {
    console.log("either enter -n or -b option.")
    return
}

//check if the file paths given do actually exist
for (let i = 0; i < filesArr.length; i++) {
    let isPresent = fs.existsSync(filesArr[i])
    if (!isPresent) {
        console.log("File: ", filesArr[i], " Not found")
        return
    }
}

// Read files 
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    //Buffer, change it to string
    let bufferContent = fs.readFileSync(filesArr[i])
    content += bufferContent + "\r\n"
}
// console.log(content)
let contentArr = content.split("\r\n")
// console.log(contentArr)

// If options array is empty, just display the file contents concatenated in order
if(optionsArr.length==0){
    for(let i=0; i<contentArr.length; i++)
        console.log(contentArr[i])
}

// For -s option if present, call sOption function
let isSPresent = optionsArr.includes("-s")
if (isSPresent) {
    SObj.sOptionKey(contentArr)
}

// For -n Option if present, call nOoption function
let isNPresent = optionsArr.includes("-n")
if (isNPresent) {
    NObj.nOptionKey(contentArr)
}

// For -b option if present, call bOption function
let isBPresent = optionsArr.includes("-b");
if (isBPresent) {
    BObj.bOptionKey(contentArr)
}
