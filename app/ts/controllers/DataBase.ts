class DataBase {

    listarAnotacoes() {
        if(localStorage.getItem("anotacoes") == null) {
            return [];
        }
        else {
            return JSON.parse(localStorage.getItem("anotacoes"));
        }
    }

    adicionaAnotacao(anotacao: Anotacao) {
        if(anotacao.getTitulo() == null) {
            "[ATÊNCÃO] você deve prencher os campos"
        }
        if(anotacao.getConteudo() == null) {
            "[ATÊNCÃO] você deve prencher os campos"
        }

        else {
            let lista: AnotacaoJSON[] = this.listarAnotacoes() == null ? [] : this.listarAnotacoes();

            const novaAnotacao = `
                {
                    "titulo": "${anotacao.getTitulo()}",
                    "conteudo": "${anotacao.getConteudo().trim()}"
                }
            `;

            console.log(novaAnotacao);

            lista.push(JSON.parse(novaAnotacao));

            localStorage.setItem("anotacoes", JSON.stringify(lista));
        }
    }

    deletaAnotacoes() {
        localStorage.removeItem("anotacoes");
    }

    deletaAnotacao(id: number) {
        let anotacoes = this.listarAnotacoes();
        const anotacaoView = new AnotacaoView();

        anotacoes.splice(id, 1);
        
        localStorage.setItem("anotacoes", JSON.stringify(anotacoes));

        anotacaoView.mostraAnotacoes();
    }

    salvaEdicaoDaAnotacao(id: number, tituloEditado: string, conteudoEditado: string) {
        let titulos = document.querySelectorAll(".titulo-anotacao");
        let conteudos = document.querySelectorAll(".conteudo-anotacao");

        const anotacaoEditada = new Anotacao(tituloEditado, conteudoEditado);
        const anotacaoJSON = `
        {
            "titulo": "${anotacaoEditada.getTitulo()}",
            "conteudo": "${anotacaoEditada.getConteudo()}"
        }`

        const anotacoesView = new AnotacaoView();

        console.log('Anotacao',anotacaoJSON);

        let lista: JSON[] = this.listarAnotacoes();

        lista[id] = JSON.parse(anotacaoJSON);

        localStorage.setItem("anotacoes", JSON.stringify(lista));

        anotacoesView.mostraAnotacoes();
    }
}
