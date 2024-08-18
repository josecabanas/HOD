//Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const buttonsCarousel = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const info = document.querySelectorAll(".info");

//Passo 2 - dar um jeito de identificar o clique do usuário no botão
buttonsCarousel.forEach((button, indice) => {
    button.addEventListener("click", () => {

        desativarBotaoSelect();

        marcarBotaoSelect(button);

        esconderImagensActive();

        aparecerImagemClicada(indice);

        esconderInfoDragao();

        mostarInfoDragao(indice);
    })
})



//Passo 3 - desmarcar o botão selecionado anterior
function desativarBotaoSelect() {
    const bottonSelect = document.querySelector(".select");

    bottonSelect.classList.remove("select");
}

//Passo 4 - marcar o botão clicado como se estivesse selecionado
function marcarBotaoSelect(button) {
    button.classList.add("select");
}

//Passo 5 - esconder a imagem anteriormente selecionada
function esconderImagensActive() {
    const imageActive = document.querySelector(".active");
    imageActive.classList.remove("active");
}

//Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
function aparecerImagemClicada(indice) {
    images[indice].classList.add("active");
}

//Passo 7 - esconder a informação do dragão anteriormente selecionado
function esconderInfoDragao() {
    const infoActive = document.querySelector(".info.active");
    infoActive.classList.remove("active");
}

//Passo 8 - mostrar a informação do dragão referente ao botão clicado
function mostarInfoDragao(indice) {
    info[indice].classList.add("active");
}

