/* 
Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

C = (F - 32) * 5/9 
F = C * 9/5 + 32
*/

function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Grau não identificado")
    }else if(fahrenheitExists){
        let updadeDegree = Number(degree.toUpperCase().replace("F", ""));
        let formula = fahrenheit => (fahrenheit - 32) * 5/9
        let degreeSign = "C"
        return formula(updadeDegree).toFixed(1) + degreeSign
    }else if(celsiusExists){
        let updadeDegree = Number(degree.toUpperCase().replace("C", ""));
        let formula = celcius => celcius * 9/5 + 32
        let degreeSign = "F"
        return formula(updadeDegree).toFixed(1) + degreeSign
    }    
}

try {
    console.log(transformDegree("50F"))
    console.log(transformDegree("25C"))
    transformDegree("35A")
}catch(error){
    console.log(error.message)
}

