// Inicia declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos
let amigos = [];

// Função que permite ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const campoAmigo = document.getElementById('amigo');
    const nomeAmigo = campoAmigo.value.trim(); // Usado .trim() para remover espaços em branco no início e no fim

    // Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return; // Encerra a função se o campo estiver vazio
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Chamar a função para atualizar a visualização da lista na tela
    atualizarLista();

    // Limpar o campo de entrada
    campoAmigo.value = '';
    campoAmigo.focus(); // Coloca o cursor de volta no campo para facilitar a adição de novos nomes
}

// Função que percorre o array amigos e adiciona cada nome como um elemento <li> dentro de uma lista HTML
function atualizarLista() {
    // Obter o elemento da lista
    const lista = document.getElementById('listaAmigos');

    // Limpar a lista existente para evitar duplicatas
    lista.innerHTML = '';

    // Percorrer o array e adicionar cada amigo à lista
    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de lista (<li>)
        const item = document.createElement('li');
        item.textContent = amigos[i];
        
        // Adiciona o item à lista no HTML
        lista.appendChild(item);
    }
}

// Função que seleciona aleatoriamente um dos nomes armazenados no array amigos.
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return; // Encerra a função
    }

    // Gerar um índice aleatório
    // Math.random() gera um número entre 0 (inclusivo) e 1 (exclusivo)
    // Multiplicamos pelo tamanho do array para obter um número no intervalo desejado
    // Math.floor() arredonda para o número inteiro mais próximo para baixo, resultando em um índice válido (de 0 a amigos.length - 1)
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Mostrar o resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<p>O amigo secreto é: <strong>${amigoSorteado}</strong></p>`;
}