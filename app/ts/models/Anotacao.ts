class Anotacao {
    private titulo: string;
    private conteudo: string;

    constructor(titulo: string, conteudo: string){
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getConteudo(): string {
        return this.conteudo;
    }

    setTitulo(titulo) {
        this.titulo = titulo;
    }

    setConteudo(conteudo) {
        this.conteudo = conteudo;
    }
}