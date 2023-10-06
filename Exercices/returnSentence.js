const str = "I have a cat. I have a mat. Things are going well."
str.split('.')
function returnSentence(wordToSearch) {
    var sentence = str.split('.');


    for(i = 0; i < sentence.length; i++) { // Retourne la PREMIERE phrase correspondante, et remet le '.'
        if(sentence[i].includes(wordToSearch)) {
            return sentence[i] + "."
        }
    }
    
}
console.log(returnSentence("have")) // I have a cat.
console.log(returnSentence("mat")) // I have a mat.
console.log(returnSentence("Things")) // Things are going well.