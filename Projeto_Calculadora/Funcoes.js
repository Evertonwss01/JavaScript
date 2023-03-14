
        // Função para incerir //
        function incerir(numero){
            // Com essa variavel num criada, ele irá armazenar o que tem no paragrafo //
            let num = document.getElementById('resultado').innerHTML;

            /* Logo em seguida ele irá pegar o que já tem armazenado na variavel 'num' e acrecentará
            o novo valor que esta sendo inerido no paragrafo.*/
            document.getElementById('resultado').innerHTML = num + numero;
        }
        // Função para Limpar totalmente os valores //
        function excluir(){
            // Adicionamos nada para dentro do paragrafo //
            document.getElementById('resultado').innerHTML = "";
        }

        // Função para apagar um valor por vez //
        function apagar(){

            // Pega todos os valores no paragrafo //
            var valores = document.getElementById('resultado').innerHTML

            // Agora utilizar a função 'substring' //
            document.getElementById('resultado').innerHTML = valores.substring(0, valores.length -1);
        }

        // Função para Calcular o resultado //
        function calcular(){
            let valores = document.getElementById('resultado').innerHTML
            
            // Testar se existe valores no paragrafo //
            if(valores){
                document.getElementById('resultado').innerHTML = eval(valores);
                // E com a função 'Eval' ele ja faz o Calculo //
            }else{
                document.getElementById('resultado').innerHTML = "Vazio...";
            }
        }