const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    
    botao.addEventListener('click',() =>{
    
        desativarBotaoSelecionado();

        selecionarBotaoCarrosel(botao);

        esconderImagem ();

        imagemFundo(indice);
    })
})

function imagemFundo(indice){
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagem (){
    const imagemSelecionada = document.querySelector ('.ativa');
    imagemSelecionada.classList.remove('ativa');
}

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector ('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}