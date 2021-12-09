function bOption(contentArr){
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] != "")
            contentArr[i] = null;
        else if (contentArr[i] == "" && contentArr[i - 1] == null)
            contentArr[i] = null;
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++)
        if (contentArr[i] != null) tempArr.push(contentArr[i])
    contentArr = tempArr;

    let counter = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = `${counter} ${contentArr[i]}`
            counter++
        }
    }
    console.log(contentArr.join("\n"))
}

module.exports = {
    bOptionKey : bOption
}
