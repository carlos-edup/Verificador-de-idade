function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novemente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homen'
            if (idade >= 0 && idade < 10) {
                //criança 
                img.setAttribute('src', '/modulo d/exercicios/vrf de idade/images/menino.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/modulo d/exercicios/vrf de idade/images/j homem.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '/modulo d/exercicios/vrf de idade/images/a homem.webp')
            } else {
                //idoso
                img.setAttribute('src', '/modulo d/exercicios/vrf de idade/images/idoso.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '/modulo d/exercicios/vrf de idade/images/menina.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/modulo d/exercicios/vrf de idade/images/j menina.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '/modulo d/exercicios/vrf de idade/images/a mulher.webp')
            } else {
                //idoso
                img.setAttribute('src', '/modulo d/exercicios/vrf de idade/images/idosa.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}