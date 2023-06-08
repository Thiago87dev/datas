const data = new Date() // Data atual
console.log(data.toString()) // Data atual em string no horario de brasilia

const data2 = new Date('2023-06-08 12:40:50') // Setando a data em string
const data3 = new Date(1686239385627) // Setando a data utilizando os milisegundos

console.log(`Dia ${data2.getDate()}`)
console.log(`Mês ${data2.getMonth() + 1}`) // Mês começa do 0
console.log(`Ano ${data2.getFullYear()}`)
console.log(`Hora ${data2.getHours()}`)
console.log(`Min ${data2.getMinutes()}`)
console.log(`Seg ${data2.getSeconds()}`)
console.log(`ms ${data2.getMilliseconds()}`)
console.log(`Dia semana ${data2.getDay()}`) // domingo = 0 - sabado = 6

console.log(data2.toString()) // imprimindo a data setada

console.log(Date.now()) // data atual em milisegundos