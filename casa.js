class Casa{
    constructor(cor, estado, janela, porta){
        this.cor =cor;
        this.estado = estado;
        this.janela = janela,
        this.porta = porta
    }

    //metodo Que muda a cor

    mudarCor(){
        console.log("casa pintada da cor desejada!😍")
    }

    //metodo que faxina

    limpaCasa(){
        console.log("casa limpada com sucesso!🧹")
    }

    //metodo que coloca lixo para fora

    colocarLixoParaFora(){
        console.log("lixo colocado para fora!🗑️")
    }

    //metodo que abre as janelas

    abrirAsJanelas(){
        console.log("janelas abertas🚪")
    }

    //metodos que abrem as portas

    abrirPortas(){
        console.log("janelasAbertas🪟")
    }
}