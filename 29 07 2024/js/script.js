const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener("click", () =>{
    event.preventDefault();
    
    // Pega aquilo que o user escreveu no campo do nome
    const inputNameValue = nome.value
    const templateHTML = `<li> ${inputNameValue}</li>`;

    // Condição
    if(inputNameValue === "") {
        alert("Espaço em BRANCO SEU IDIOTA!")
        return false;
    }

    // Colocando itens no HTml
    lista.innerHTML += templateHTML;

    // Limpando o campo
    nome.value="";




        // Pega aquilo que o user escreveu no campo do idade
        const inputIdadeValue = idade.value
        const idadeHTML = `<li> ${inputIdadeValue}</li>`;
    
        // Condição
        if(inputIdadeValue === "") {
            alert("Espaço em BRANCO SEU IDIOTA!")
            return false;
        }
    
        // Colocando itens no HTml
        lista.innerHTML += idadeHTML;
    
        // Limpando o campo
        idade.value="";




         // Pega aquilo que o user escreveu no campo do telefone
         const inputTelefoneValue = telefone.value
         const telefoneHTML = `<li> ${inputTelefoneValue}</li>`;
        
         // Condição
         if(inputTelefoneValue === "") {
             alert("Espaço em BRANCO SEU IDIOTA!")
             return false;
         }
        
         // Colocando itens no HTml
         lista.innerHTML += telefoneHTML;
        
         // Limpando o campo
         telefone.value="";


        

     





})




// const botao = document.getElementById('button');

// // Adiciona um listener de evento para o clique
// botao.addEventListener('click', function() {
//     // Exibe um alerta quando o botão é clicado
//     alert('Você clicou no botão!');
// });