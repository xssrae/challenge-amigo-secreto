// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nome = inputAmigo.value.trim();

    // Validações
    if (nome === '') {
        alert('Por favor, digite um nome!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Cria o elemento da lista
    const li = document.createElement('li');
    li.textContent = nome;
    
    // Adiciona botão de remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'X';
    botaoRemover.className = 'button-remove';
    botaoRemover.onclick = () => {
        amigos = amigos.filter(a => a !== nome);
        listaAmigos.removeChild(li);
        limparResultado();
    };

    li.appendChild(botaoRemover);
    listaAmigos.appendChild(li);

    // Limpa o input
    inputAmigo.value = '';
    limparResultado();
}

// Função para limpar o resultado anterior
function limparResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    limparResultado();

    // Validações
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    // Sorteia um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Cria o elemento para mostrar o resultado
    const li = document.createElement('li');
    li.textContent = amigos[indiceAleatorio];
    resultado.appendChild(li);
}

// Adiciona evento de tecla Enter no input
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});