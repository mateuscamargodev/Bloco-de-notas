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
    const dataBase = new DataBase();
    const titulos = document.querySelectorAll(".titulo-anotacao");
    const conteudos = document.querySelectorAll(".conteudo-anotacao");

    let caixaFundo: HTMLElement = document.querySelector(".caixa-fundo");
    caixaFundo.style.visibility = 'visible';

    let caixaDeEdicao = document.createElement('div');
    caixaDeEdicao.classList.add("caixa-de-edicao");

    let espacoDeEdicao: HTMLElement = document.querySelector(".espaco-de-edicao");
    espacoDeEdicao.appendChild(caixaDeEdicao);
    caixaFundo.appendChild(espacoDeEdicao);

    espacoDeEdicao.style.zIndex = '2';

    let inputTitiuloEdicao = document.createElement('input');
    let inputConteudoEdicao = document.createElement('textarea');
    caixaDeEdicao.appendChild(inputTitiuloEdicao);
    caixaDeEdicao.appendChild(inputConteudoEdicao);

    inputTitiuloEdicao.value = titulos[id].textContent;
    inputConteudoEdicao.value = conteudos[id].textContent;

    let botaoSalvar = document.createElement('button');
    botaoSalvar.textContent = "Salvar";

    botaoSalvar.addEventListener("click", function(){
        dataBase.salvaEdicaoDaAnotacao(id, inputTitiuloEdicao.value, inputConteudoEdicao.value)
    })
    
    caixaDeEdicao.appendChild(botaoSalvar);
    
    document.body.appendChild(caixaDeEdicao);
}