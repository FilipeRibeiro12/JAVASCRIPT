function Calcular(){
    var txtn1 = document.getElementById('inicio')
    var inicio = Number(txtn1.value)
    var txtn2 = document.getElementById('fim')
    var fim = Number(txtn2.value)
    var txtn3 = document.getElementById('passo')
    var passos = Number(txtn3.value)

    for(var resultado = inicio + passos;inicio = fim;inicio + passos){
    console.log(`${resultado}`)
    }
}