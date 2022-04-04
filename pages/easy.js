
const number1 = document.getElementById(`number1`)
num1 = number1.innerHTML = numeroAleatorio()

const number2 = document.getElementById(`number2`)
num2 = number2.innerHTML = numeroAleatorio()

function numeroAleatorio() {
    return Math.round(Math.random() * 100)
}

function result() {
    return num1 + num2
}

function probar() {
    return document.getElementById(`probar`).value

}

const btn = document.getElementById(`btn`)
btn.addEventListener(`click`, () => {

    if (result() === parseInt(probar())) {
        const final=document.getElementById(`result-final`)
        final.innerHTML=`FELICITACIONES!!! ES CORRECTO SOS UN GENI@`
        const resultado = document.getElementById(`result`)
        resultado.innerHTML = probar()
    } else {
        const resultado = document.getElementById(`result-final`)
        resultado.innerHTML = `NO ES LA RESPUESTA, PERO PODES VOLVER A INTENTARLO`
    }

})