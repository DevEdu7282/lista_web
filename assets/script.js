const input = document.querySelector('.form-control');
const corpoLista = document.querySelector('.todolista');
const button = document.querySelector('.btn');
const array = [];

// FUNÇÃO DE CLICK
button.addEventListener('click', () => {

    if(input.value === ""){
        alert('Digíte sua Tarefa.');
    } else if(array.some(item => item.item === input.value.toLowerCase())){
        alert('Valor já na lista');
    } else{
        array.push({
            item:input.value.toLowerCase(),
            feito: false
        });
    };

    input.value = '';
    input.focus();

    todo_lista();
});

// FUNÇÃO PARA CRIAR LISTA
function todo_lista(){
    
    let div = '';

    array.forEach((tarefa, posicao) => {

        div += 
        `<div class="lista ${tarefa.feito && "feito"}">
            <p class="m-0">${tarefa.item}</p>
            <div>
                <button onclick="concluida(${posicao})" class="butok"><i class="bi bi-check-circle-fill"></i></button>
                <button onclick="deletar(${posicao})" class="text-danger"><i class="bi bi-trash3-fill"></i></button>
            </div>
        </div>`;
    });

    corpoLista.innerHTML = div
}

// FUNÇÃO PARA CONCLUIR TAREFA
function concluida(posicao){

    array[posicao].feito = !array[posicao].feito;

    todo_lista();
}

// FUNÇÃO PARA DELETAR
function deletar(posicao){

    array.splice(posicao, 1);

    todo_lista();
}