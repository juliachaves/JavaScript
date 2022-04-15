/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

function getScore (score){
    if (score >= 90 && score <= 100){
        console.log("A")
    } else if (score <= 89 && score >= 80){
        console.log("B")
    } else if (score <= 79 && score >= 70){
        console.log("C")
    }else if (score <= 69 && score >= 60){
        console.log("D")
    }else if (score < 60 && score >=0){
        console.log("F")
    }else{
        console.log("NOTA INVÁLIDA")
    }
}

getScore(102)
getScore(-2)
getScore(0)
getScore(33)
getScore(67)
getScore(77)
getScore(87)
getScore(97)
getScore(100)
