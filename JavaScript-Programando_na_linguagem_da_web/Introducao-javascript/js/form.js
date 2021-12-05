//Traz o botão do formulário
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Adiciona um escutador de evento no botão e cria uma função anônima que adiciona um novo paciente
botaoAdicionar.addEventListener("click", function (event) { 

    event.preventDefault();

    //Traz o formulário
    var form = document.querySelector("#form-adiciona");
    
    //Váriavel que guarda os dados do paciente através da função obtemPacienteDoFormalario
    var paciente = obtemPacienteDoFormulario(form);

    //Váriavel que verifica e armazena os erros do formulário
    var erros = validaPaciente(paciente);
    console.log(erros);

    //Se os dados do formulário estiverem errados exibe uma mensagem e não adiciona o paciente na tabela
    if(erros.length > 0) {

        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    //Reseta os campos do formulário quando o paciente é adicionado
    form.reset();

    //Remove as mensagens de erro se o paciente for adicionado
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {

    //Cria a TR
    var pacienteTr = montaTr(paciente);

    //Traz a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //Adiciona o  paciente na tabela
    tabela.appendChild(pacienteTr);
}

//Função que exibe as mensagens dos erros
function exibeMensagensDeErro(erros) {

    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";
    
    erros.forEach( function(erro){

        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

//Função que cria o objeto paciente
function obtemPacienteDoFormulario(form) {

    var paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

//Função que monta a TR completa
function montaTr(paciente) {

    //Váriaveis que criam os TRs e TDs
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Adiciona os elementos TDs como filhos do pacienteTr
    pacienteTr.appendChild( montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild( montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild( montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild( montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild( montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//Função que cria as TDs
function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

//Função que verifica se os dados do paciente são válidos
function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {

        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) {
    
        erros.push("Peso inválido");
    }

    if(!validaAltura(paciente.altura)) {

        erros.push("Altura inválida");
    }

    if(paciente.gordura.length == 0) {

        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0) {

        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0) {

        erros.push("A altura não pode ser em branco");
    }

    return erros;
} 