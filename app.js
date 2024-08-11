// Lista para armazenar números sorteados
let listaDeNumerosSorteados = [];

// Número secreto gerado aleatoriamente
let numeroSecreto = gerarNumeroAleatorio();

// Contador de tentativas
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Secret Number Game');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100:');
}

// Exibe a mensagem inicial ao carregar a página
mensagemInicial();

function limparCampo() {
    const chute = document.querySelector('input');
    chute.value = '';
}

// Função para verificar o chute do usuário
function verificarChute() {
    const chute = parseInt(document.querySelector('input').value, 10);

    if (chute === numeroSecreto) {
        const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Acertou!');
        const mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
        document.querySelector('input').setAttribute('disabled', true);
    } else {
        const mensagem = chute > numeroSecreto
            ? `O número secreto é menor que ${chute}`
            : `O número secreto é maior que ${chute}`;
        exibirTextoNaTela('p', mensagem);
    }
    
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido;
    do {
        numeroEscolhido = Math.floor(Math.random() * 100) + 1;
    } while (listaDeNumerosSorteados.includes(numeroEscolhido));

    listaDeNumerosSorteados.push(numeroEscolhido); // Push atribui o elemento ao final da lista
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
}

function reiniciarJogo() {
    if (listaDeNumerosSorteados.length >= 5) {
        listaDeNumerosSorteados = [];
    }

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();

    document.querySelector('input').removeAttribute('disabled');
    document.getElementById('chutar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}