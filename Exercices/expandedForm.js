// Exercice non fini (c'est le seul) par manque de temps. Résultat complètement incorrect.
// Pour expliquer ma démarche, j'ai essayé de séparer le nombre de base, puis d'avoir sa longueur, afin
// de par exemple, pour 10000, détecter que la longueur est de 5, ce qui fera 4 fois 0 à afficher, puis additioner le reste,
// cependant ma réflexion n'est pas encore aboutie et je ne suis pas allé jusqu'au bout de l'exercice, manque de temps et 
// ma piste semble fausse / trop dure.

function expandedForm(baseNumber) {
    var baseNumberStr = baseNumber.toString()
    var long = baseNumberStr.split('')
    var length = baseNumber.toString().length

    baseNumber = baseNumber[0] + ("0".repeat(length))
    return baseNumber
}

console.log(expandedForm(50000))