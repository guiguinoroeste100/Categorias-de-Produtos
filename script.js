document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o contador do carrinho
    let carrinhoCount = 0;

    // Seleciona o elemento que exibirá o contador
    const contadorCarrinho = document.getElementById('contador-carrinho');

    // Seleciona os botões "Adicionar ao Carrinho" individualmente
    const botaoEletronicaComum = document.getElementById('botao-eletronica-comum');
    const botaoEletronicaThec = document.getElementById('botao-eletronica-thec');

    // Adiciona ouvintes de eventos para cada botão separadamente
    botaoEletronicaComum.addEventListener('click', function () {
        // Incrementa o contador
        carrinhoCount++;

        // Atualiza o texto do contador
        contadorCarrinho.textContent = carrinhoCount;
    });

    botaoEletronicaThec.addEventListener('click', function () {
        // Incrementa o contador
        carrinhoCount++;

        // Atualiza o texto do contador
        contadorCarrinho.textContent = carrinhoCount;
    });
});

// Inicializa o contador do carrinho
let carrinhoCount = 0;

// Seleciona todos os botões "Adicionar ao Carrinho"
const botoesCarrinho = document.querySelectorAll('.produto button');

// Seleciona o elemento que exibirá o contador
const contadorCarrinho = document.getElementById('contador-carrinho');

// Adiciona um escutador de eventos para cada botão
botoesCarrinho.forEach(function (botao) {
    botao.addEventListener('click', function () {
        // Incrementa o contador
        carrinhoCount++;

        // Atualiza o texto do contador
        contadorCarrinho.textContent = carrinhoCount;
    });
});
