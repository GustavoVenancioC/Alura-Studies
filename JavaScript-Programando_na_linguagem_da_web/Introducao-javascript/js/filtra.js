//Traz o input de filtro do HTML
var campoFiltro = document.querySelector("#filtrar-tabela");

//Função que filtra os pacientes de acordo com o valor inserido no input 
campoFiltro.addEventListener("input", function() {

    console.log(this.value);

    //Traz a lista de pacientes
    var pacientes = document.querySelectorAll(".paciente");

    //Funcionalidade que mostra ou oculta os pacientes de acordo com o valor inserido no input
    if(this.value.length > 0) {

        for(var i = 0; i < pacientes.length; i++) {

            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

    
            if( !expressao.test(nome)) {
    
                paciente.classList.add("invisivel");
    
            } else {
    
                paciente.classList.remove("invisivel");
            }
        }
    } else {

        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            
            paciente.classList.remove("invisivel");

        }
    }
    

});