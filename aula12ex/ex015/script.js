function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            document.body.style.background = '#4494e3'
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','crianca-homem.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','jovem-homem.jpg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src','adulto-homem.jpg')
            } else{
                //idoso
                img.setAttribute('src','idoso-homem.jpg')
            }
        } else if (fsex[1].checked){
           document.body.style.background = '#d12a9f'
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','crianca-mulher.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','jovem-mulher.jpg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src','adulto-mulher.jpg')
            } else{
                //idoso
                img.setAttribute('src','idoso-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}