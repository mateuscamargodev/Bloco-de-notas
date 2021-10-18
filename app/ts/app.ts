const botaoAdiciona = document.querySelector('#envia-anotacao');
const anotacaoView = new AnotacaoView();
const dataBase = new DataBase();
anotacaoView.mostraAnotacoes();
botaoAdiciona.addEventListener('click', function () {
    const controller = new AnotacaoController();
    const inputTitiulo:  HTMLInputElement = <HTMLInputElement>document.querySelector('#titulo-nota');
    const inputConteudo: HTMLInputElement = <HTMLInputElement>document.querySelector('#conteudo-nota');
    const anotacao = new Anotacao(inputTitiulo.value, inputConteudo.value);
    controller.adicionaAnotacao(anotacao);
    anotacaoView.mostraAnotacoes();
});

const inputFiltra = document.querySelector("#filtra-anotacoes");
inputFiltra.addEventListener("input", function () {
    anotacaoView.filtraAnotacao(this.value);
});

function editaAnotacao(id: number) {
    const dataBase: DataBase = new DataBase();

    let anotacao: AnotacaoJSON = dataBase.getAnotacao(id);

    console.log(anotacao);

    let caixaFundo: HTMLElement = document.querySelector(".caixa-fundo");
    caixaFundo.style.visibility = 'visible';

    let inputTituloEdicao: HTMLInputElement = document.querySelector("#inputTituloEdicao");
    let inputConteudoEdicao: HTMLInputElement = document.querySelector("#inputConteudoEdicao");
    let inputId: HTMLInputElement = document.querySelector("#inputId");

    inputId.value = id.toString();
    inputTituloEdicao.value = anotacao.titulo;
    inputConteudoEdicao.value = anotacao.conteudo;
}

const botaoSalvaEdicao = document.querySelector("#botaoSalvaEdicao");
botaoSalvaEdicao.addEventListener("click", function(){
    
    let inputTitiuloEdicao: HTMLInputElement = document.querySelector("#inputTituloEdicao");
    let inputConteudoEdicao: HTMLInputElement = document.querySelector("#inputConteudoEdicao");
    let inputId: HTMLInputElement = document.querySelector("#inputId");

    const dataBase: DataBase = new DataBase();
    const anotacao = dataBase.getAnotacao(Number(inputId.value));

    anotacao.titulo = inputTitiuloEdicao.value;
    anotacao.conteudo = inputConteudoEdicao.value;

    const listaDeAnotacoes = dataBase.listarAnotacoes();
    listaDeAnotacoes[inputId.value] = anotacao;
    localStorage.setItem("anotacoes", JSON.stringify(listaDeAnotacoes));
})