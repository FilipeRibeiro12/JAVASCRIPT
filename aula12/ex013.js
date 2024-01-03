var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var minuto = agora.getMinutes()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia Inválido')
        break
}

console.log(`São exatamente ${hora} horas e ${minuto} minutos`)

if(hora < 12 ){
    console.log('Bom dia')
} else if(hora <=18 ){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
