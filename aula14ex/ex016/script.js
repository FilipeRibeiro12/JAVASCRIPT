function Calcular() {
  var txtn1 = document.querySelector('#inicio')
  var txtn2 = document.querySelector('#fim')
  var txtn3 = document.querySelector('#passo')
  var res = document.querySelector('#resultado')
  
  if(txtn1.value.length == 0 || txtn2.value.length == 0 || txtn3.value.length == 0){
    res.innerHTML = 'Impossível contar!'
    window.alert('[ERRO] Faltam Dados!')
    
  }else{
    res.innerHTML = 'Contando: <br>'
    var i = Number(txtn1.value)
    var f = Number(txtn2.value)
    var p = Number(txtn3.value)
    if(p <= 0){
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if(i < f){
      // Contagem Crescente
      for(var c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    } else{
      // Contagem Regressiva
      for(var c = i; c >= f; c-= p)
      res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
  }
  
  
  
}