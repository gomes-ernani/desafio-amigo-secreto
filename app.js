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