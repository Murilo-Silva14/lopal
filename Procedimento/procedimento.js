function procedimento(){

    
    function inicio(){
        let resultado = calcular(a = 3, b = 4);
        mensagem(frase = "O resultado de a² + b² é: " + calcular(b = 5));
    
    }

    function mensagem(frase){
        let linha = "-";
        let i = 0;
        

        do{
            linha = linha + "-"
            i++;
        }while( i < 50 );

        alert( linha + "\n" + frase + "\n" + linha);
    }

    function calcular (a, b){
        let resultado = a * a + b * b;
        return resultado;
    }

    inicio();

}




