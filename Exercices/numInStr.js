function numInStr(strWithNum) {
    var result = []
    var regexNumber = /\d/; // Source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
    for(const str of strWithNum) {
        if(regexNumber.test(str)) {
            result.push(str)
        }
    }
    return result;
}
const chainString = ["test", "voici 1 test", "ainsi qu'un autre", "test555", "5555", "finalement..."]
console.log(numInStr(chainString)) // [ 'voici 1 test', 'test555', '5555' ]