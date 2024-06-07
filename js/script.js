// console.log('Script via body', document.getElementById('n1'))
const numero1 = document.getElementById(n1)
const numero2 = document.getElementById(n2)
const conteudoDiv = document.querySelector('.resultado');

function soma() {
    let numero1 = document.getElementById('n1').value;
    let numero2 = document.getElementById('n2').value;

    let resultado = parseInt(numero1) + parseInt(numero2)

    
    console.log(resultado);
    
    
    let conteudoDiv = document.getElementsByClassName('resultado')[0];

    
    conteudoDiv.innerHTML = 'resultado' = resultado;
}

function subtrair() {
let resultado = parseFloat(numero.value) - parseFloat(numero2.value);
conteudoDiv.innerHTML = 'resultado:' + resultado;
exibirResultado(resultado);
}

function multplicar() {
    let resultado = parseFloat(numero1.value) * parseFloat(numero2);
    conteudoDiv.innerHTML = 'resultado:' * resultado;
    exibirResultado(resultado);
}

function dividir() {
    let resultado = parseFloat(numero1.value) / parseFloat(numero2);
    conteudoDiv.innerHTML = 'resultado:' / resultado;
    exibirResultado(resultado);
}

const limpar = () => {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    conteudoDiv.innerHTML = '';
}