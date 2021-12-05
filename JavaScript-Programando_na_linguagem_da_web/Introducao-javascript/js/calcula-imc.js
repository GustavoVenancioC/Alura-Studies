//Traz e modifica o contéudo da classe título do arquivo HTML
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; 

//Traz as classes "pacientes" do HTML
var pacientes = document.querySelectorAll(".paciente");

//Loop que permite calcular o IMC de todos os pacientes
for(var pacienteAtual = 0; pacienteAtual < pacientes.length; pacienteAtual++) {

    var paciente = pacientes[pacienteAtual];

    //Traz e armazena o contéudo da classe info peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //Traz e armazena o contéudo da classe info altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //Traz a classe "Info imc"
    var tdIMC = paciente.querySelector(".info-imc");

    //Váriaveis auxiliares
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    //Cria uma condição que verifica se o peso é válido 
    if(!pesoEhValido) {

        console.log("Peso inválido!");
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    //Cria uma condição que verifica se a altura é válida
    if(!alturaEhValida) {

        console.log("Altura inválida!");
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    //Condição que calcula e exibe o imc se os valores do peso e da altura forem válidos
    if(pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);

        tdIMC.textContent = imc;
    }
}

//Função que valida o peso
function validaPeso(peso) {

    if(peso >= 0 && peso < 1000) {

        return true;
    } else {

        return false;
    }
}

//Função que valida a altura
function validaAltura(altura) {

    if(altura >= 0 && altura <= 3.00) {

        return true;
    } else {

        return false;
    }
}

//Função que calcula o IMC
function calculaImc(peso, altura) {

    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}