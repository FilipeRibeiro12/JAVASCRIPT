function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imgmanha')
    var data = new Date()
    var hora = data.getHours()
    var hora = 22
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos,`

    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'ftmanha.jpg'
        document.body.style.background = '#E2CD9F'
        msg.innerHTML += ' Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src ='fttarde.jpg'
        document.body.style.background = '#e65c2e'
        msg.innerHTML += ' Boa tarde!'
    } else {
        img.src = 'ftnoite.jpg'
        document.body.style.background = '#1a1a1f'
        msg.innerHTML += ' Boa noite!'
        //BOA NOITE!
    }
}

