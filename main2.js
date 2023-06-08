// função para colocar um 0 a esquerda
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}` 
}

function formataData (date){
    const dia = String(date.getDate()).padStart(2, '0') // utilizando padStart para colocar um 0 a esquerda 
    const mes = zeroAEsquerda(date.getMonth() + 1)
    const ano = zeroAEsquerda(date.getFullYear())
    const hora = zeroAEsquerda(date.getHours())
    const min = String(date.getMinutes()).padStart(2, '0') // utilizando padStart para colocar um 0 a esquerda
    const seg = zeroAEsquerda(date.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const date = new Date()
const dtBrasil = formataData(date)
console.log(dtBrasil)