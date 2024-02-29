class Casa {
    cor: string;
    // estado: string;
    // janela: string;
    // porta: string;
    constructor(cor: string) {
        this.cor = cor;
        // this.estado = estado;
        // this.janela = janela;
        // this.porta = porta
    }
    //CRIANDO MÉTODOS//

    mudarDeCor():void{
        console.log(`A nova cor é ${this.cor}`)
    }
    // limpaCasa():void{
    //     console.log("Casa limpada com sucesso")
    // }
    // colocarLixoParaFora():void{
    //     console.log("Lixo colocado para fora")
    // }
    // abrirAsJanelas():void{
    //     console.log("Janelas Abertas")
    // }
    // abrirPortas():void{
    //     console.log("Portas abertas")
    // }
}

const novaCorDaCasa = new Casa("Azul");
novaCorDaCasa.mudarDeCor()