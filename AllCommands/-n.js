function nOption(contentArr){
    for (let i = 0; i < contentArr.length; i++) {
        let n = i + 1;
        let s =
            contentArr[i] = `${i + 1} ${contentArr[i]}`;
    }
    console.log(contentArr.join("\n"))
}

module.exports = {
    nOptionKey : nOption
}
