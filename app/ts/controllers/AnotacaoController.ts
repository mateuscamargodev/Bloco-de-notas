class AnotacaoController {
    
    adicionaAnotacao(anotacao: Anotacao) {
        const dataBase: DataBase = new DataBase();

        dataBase.adicionaAnotacao(anotacao);
    }
}