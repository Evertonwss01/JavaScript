function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var AnoDigitado = document.getElementById("txtano")
    var retorno = document.querySelector('div#res');

    if (AnoDigitado.value.length == 0 || Number(AnoDigitado.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente !');
    } else{
        var sexoInformado = document.getElementsByName('sexo')
        var idade = ano - Number(AnoDigitado.value)
        
        var genero = '';
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto')

        if(sexoInformado[0].checked){
            genero = 'Homem'

            if (/*idade > 0 && */idade > 0 && idade <=5){
                //bebe criança//
                imagem.setAttribute('src', 'meninobebe.jpg');
            } else if (idade <= 10){
                //Um criança
                
                imagem.setAttribute('src', 'meninocriança.jpg');
                //Modo de atribuir uma imagem em javascript//
            
            } else if(idade < 21){
                //Um adolecente
                imagem.setAttribute('src', 'meninoadolecente.jpg');
            } else if(idade < 50){
                //Um adulto
                imagem.setAttribute('src', 'homemadulto.jpg')
            } else{
                //Um velho
                imagem.setAttribute('src', 'Homemvelho.jpg');
            }

        }else if(sexoInformado[1].checked){
            genero = 'Mulher';

            if (idade > 0 && idade <=5){
                imagem.setAttribute('src', 'meninabebe.jpg')
            } else if(idade <= 10){
                //Um criança
                imagem.setAttribute('src', 'meninacriança.jpg');
            } else if(idade < 21){
                //Um adolecente
                imagem.setAttribute('src', 'meninaadolecente.jpg');
            } else if(idade < 50){
                //Um adulta
                imagem.setAttribute('src', 'mulheradulta.jpg')
            } else{
                //Um velha
                imagem.setAttribute('src', 'mulhervelha.jpg')
            }
        } else {
            window.alert('O correu um ERRO !');
        }
        retorno.innerHTML = `Detectamos ${genero}. A sua idade é de <strong>${idade} Anos.</strong.`
        retorno.appendChild(imagem);
    }

}