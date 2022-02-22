
const calcular = document.getElementById('calcular');



function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; 
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
       const conta = (peso /(altura * altura)).toFixed(1);
       let classificacao = '';
       if(conta < 18.5){
           classificacao = 'abaixo do peso'}
           
           else if ( conta < 25 ) {
               classificacao = 'peso ideal, Parabéns'
           }

            else if(conta < 30 ){
               classificacao ='levemente acima do peso';

            
           }
           else if (conta < 35)
           {
               classificacao = 'você está com obesidade cuidado!!'
           } 
           else 
           {
               classificacao = 'você está com obesidade nv 2 ou mais;'
           }
      resultado.textContent = `${nome} seu Imc é ${conta} e você está  ${classificacao}` ;    }
     
  else {
alert('preencha os campos')
    }
   }


calcular.addEventListener('click', imc)

