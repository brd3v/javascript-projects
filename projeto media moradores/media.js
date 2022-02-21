
const calcular =document.getElementById('calcular');

function logica () {
const moradores = document.getElementById('moradores').value;
const casas = document.getElementById('casas').value;
const resultado = document.getElementById('resultado')

if (moradores !== '' && casas !== ''){
    const conta = (moradores / casas).toFixed(1)
    resultado.textContent = `Média de moradores em cada casa ${conta}`
}else {
    resultado.textContent = 'preemcha todos os dados'

}





}


calcular.addEventListener('click', logica)