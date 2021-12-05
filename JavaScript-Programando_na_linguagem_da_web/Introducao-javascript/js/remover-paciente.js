//Traz a tabela do HTML
var tabela = document.querySelector("#tabela-pacientes");

//Se algum paciente da tabela for clicado duas vezes, remove a linha do paciente que foi clicado
tabela.addEventListener("dblclick", function(event) {

    event.target.parentNode.classList.add("fadeOut");

    //Função que executa uma função após um tempo definido
    setTimeout(function() {

        event.target.parentNode.remove();

    }, 500);
});
