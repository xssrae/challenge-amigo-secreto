# Amigo Secreto

Minha solução para o desafio Amigo Secreto da Oracle One.  Consiste em uma aplicação web simples que permite organizar sorteios de amigo secreto.

## ✨ Funcionalidades

* **Adicionar nomes**: Os usuários podem adicionar nomes através de um campo de texto e botão "Adicionar".
* **Validar entrada**: O sistema valida automaticamente se o campo está vazio e se o nome já existe na lista.
* **Visualizar a lista**: Todos os nomes adicionados são exibidos em uma lista abaixo do campo de entrada.
* **Remover nomes**: Cada nome na lista possui um botão de remoção (X).
* **Sorteio aleatório**: Um botão "Sortear Amigo" seleciona e exibe um nome aleatório da lista.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Google Fonts (Inter e Merriweather)

## 💻 Como Usar

1. **Adicionar Participantes**:
   - Digite o nome no campo de texto
   - Clique no botão "Adicionar" ou pressione Enter
   - O nome será adicionado à lista visível

2. **Gerenciar Lista**:
   - Visualize todos os nomes adicionados
   - Remova nomes indesejados clicando no "X" ao lado de cada nome

3. **Realizar Sorteio**:
   - Clique no botão "Sortear Amigo"
   - Um nome será selecionado aleatoriamente e exibido na tela

## ⚙️ Validações e Regras

- Não é permitido adicionar nomes vazios
- Não é permitido adicionar nomes duplicados
- É necessário ter pelo menos 2 nomes na lista para realizar o sorteio
- O resultado do sorteio é exibido abaixo da lista de nomes

## 📁 Estrutura do Projeto

```
amigo-secreto/
│
├── index.html
├── style.css
├── app.js
└── assets/
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## 🚀 Como Iniciar

1. Clone o repositório
2. Abra o arquivo `index.html` em seu navegador
3. Comece a adicionar nomes e realizar sorteios.

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.