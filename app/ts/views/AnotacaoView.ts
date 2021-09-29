class AnotacaoView {

    mostraAnotacoes() {
        
        let notasCriadas = document.querySelector(".notas-criadas");
        const dataBase: DataBase = new DataBase();
        const anotacoes = dataBase.listarAnotacoes();

        notasCriadas.innerHTML = "";

        var contador  = 0;
        
        anotacoes.map( anotacao => {
                notasCriadas.innerHTML += `
                <div class="anotacao-caixa">
                    <h2 class="titulo-anotacao">${anotacao.titulo}</h2>
                    <p class="conteudo-anotacao">${anotacao.conteudo}</p>
                    <button onclick="dataBase.deletaAnotacao(${contador})">Excluir anotacão</button>
                    <button onclick="editaAnotacao(${contador})">Editar anotação</button>
                </div>`
                contador++;
        })
    }

    filtraAnotacao(texto: string) {
        let anotacoesCaixa: HTMLElement[] = <HTMLElement[]><any>document.querySelectorAll(".anotacao-caixa");

        const buscaTexto = new RegExp(texto, "i");
        const titulos = document.querySelectorAll(".titulo-anotacao");
        
        var contador = 0;
        
        anotacoesCaixa.forEach(function(anotacaoCaixa) {

                const anotacoesView = new AnotacaoView();

                if(buscaTexto.test(titulos[contador].textContent)) {
                    anotacaoCaixa.classList.remove("invisivel");   
                    console.log("Parabéns!");
                }
                else {
                    anotacaoCaixa.classList.add("invisivel");
                    console.log("uhuuuu");
                }

            contador++
        })
    }
}
