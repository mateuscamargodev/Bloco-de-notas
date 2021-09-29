class DataBaseEdita {
    editaAnotacao(id) {
        console.log("DEu certo!!");
        const tituloEditado = document.querySelector("#titulo-edita");
        const conteudoEditado = document.querySelector("#conteudo-edita");
        let tituloNota = document.querySelectorAll("titulo-nota");
        let conteudoNota = document.querySelectorAll("conteudo-nota");
        tituloNota[id].innerHTML = tituloEditado.value;
        conteudoEditado[id].innerHTML = conteudoEditado.value;
        window.location.href = "index.html";
    }
}
