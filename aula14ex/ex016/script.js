function Calcular(){
    var txtn1 = document.querySelector('#inicio')
    var txtn2 = document.querySelector('#fim')
    var txtn3 = document.querySelector('#passo')
    var i = Number(txtn1.value)
    var f = Number(txtn2.value)
    var p = Number(txtn3.value)
    var res = document.querySelector('#res')

   for(var x = i ;x <= f;x + p){
    res.innerHTML += x
   }
    
}