const botaoAdiciona = document.querySelector('#envia-anotacao');
const anotacaoView = new AnotacaoView();
const dataBase = new DataBase();
anotacaoView.mostraAnotacoes();
botaoAdiciona.addEventListener('click', function () {
    const controller = new AnotacaoController();
    const inputTitiulo = document.querySelector('#titulo-nota');
    const inputConteudo = document.querySelector('#conteudo-nota');
    const anotacao = new Anotacao(inputTitiulo.value, inputConteudo.value);
    controller.adicionaAnotacao(anotacao);
    anotacaoView.mostraAnotacoes();
});
const inputFiltra = document.querySelector("#filtra-anotacoes");
inputFiltra.addEventListener("input", function () {
    anotacaoView.filtraAnotacao(this.value);
});
function editaAnotacao(id) {
    const dataBase = new DataBase();
    let anotacao = dataBase.getAnotacao(id);
    console.log(anotacao);
    let caixaFundo = document.querySelector(".caixa-fundo");
    caixaFundo.style.visibility = 'visible';
    let inputTituloEdicao = document.querySelector("#inputTituloEdicao");
    let inputConteudoEdicao = document.querySelector("#inputConteudoEdicao");
    let inputId = document.querySelector("#inputId");
    inputId.value = id.toString();
    inputTituloEdicao.value = anotacao.titulo;
    inputConteudoEdicao.value = anotacao.conteudo;
}
const botaoSalvaEdicao = document.querySelector("#botaoSalvaEdicao");
botaoSalvaEdicao.addEventListener("click", function () {
    let inputTitiuloEdicao = document.querySelector("#inputTituloEdicao");
    let inputConteudoEdicao = document.querySelector("#inputConteudoEdicao");
    let inputId = document.querySelector("#inputId");
    const dataBase = new DataBase();
    const anotacao = dataBase.getAnotacao(Number(inputId.value));
    anotacao.titulo = inputTitiuloEdicao.value;
    anotacao.conteudo = inputConteudoEdicao.value;
    const listaDeAnotacoes = dataBase.listarAnotacoes();
    listaDeAnotacoes[inputId.value] = anotacao;
    localStorage.setItem("anotacoes", JSON.stringify(listaDeAnotacoes));
});
