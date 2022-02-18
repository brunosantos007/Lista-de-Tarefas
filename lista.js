

let inputText = document.getElementById("inputText")
let elementoPai = document.getElementById("divTarefas")


function addTarefas(resultado){
    let texto = inputText.value
    var resultado = document.createElement("div")
    resultado.id = "removeFilho"
    elementoPai.appendChild(resultado)
    resultado.innerHTML += `<p>${texto}</p> <input onclick="limparTarefas()" type="reset" value="Limpar">`

    console.log(resultado)
    
    resultado.style.backgroundColor += "blue"
    resultado.style.marginTop = "10px"
    resultado.style.padding = "10px"
    resultado.style.display = "flex"
    resultado.style.justifyContent = "space-between"

    
    if(texto === ""){
        alert("Insira um texto")
        limparTarefas()
    }
}

function limparTarefas(){
    elementoPai.removeChild()
}    