  let tarefas = []

function adicionarTarefa() {

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    //Se o valor do input for vazio, exibe mensagem de erro

    if (tarefa == "") {
        let mensagemErro = "Por favor, insira uma tarefa."
        mensagem.textContent = mensagemErro
    } else {
        let mensagemsucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemsucesso
        tarefas.push(tarefa)
        renderizarTarefas()
    }


    //limpa o input do usuário
    inputTarefa.value = ""
}

function renderizarTarefas() {
   const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = "" 

   // for itens na lista
    // 1. item inicial (iterador)
    //2. item final (condicao)
    //3.se vai de 1 em 1 elemento ou se pula

    //for (iterador, condicao, frenquencia)
    for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefas[i]
        let botaoremover = document.createElement("button")
        botaoremover.className = "remover"
        botaoremover.textContent = "Remover"
        botaoremover.onclick = () => {removerTarefa(i)}

        let botaoeditar = document.createElement("button")
        botaoeditar.className = "editar"
        botaoeditar.textContent = "Editar"
        botaoeditar.onclick = () => {editarTarefa(i)}



        novaTarefa.appendChild(botaoremover)
        novaTarefa.appendChild(botaoeditar)
    listaTarefas.appendChild(novaTarefa)
    }

}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i) {
   let tarefaeditada = prompt("Edite a tarefa:", tarefas[i])
   if (tarefaeditada.trim() !== "") {
       tarefas[i] = tarefaeditada
       renderizarTarefas()
   }
}

function LimparLista() {
    tarefas.length = 0
    renderizarTarefas()
     const mensagem = document.getElementById("mensagem")
     mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}

//Botoes:
//1.Criar o botao de remover(visualmente)
//2.lógica para remover a tarefa da lista de tarefas
//3. Criar botao de editar(visualmente)
//4. lógica para editar a tarefa da lista de tarefas
//5.Criar botao de apagar tudo

//linha 42