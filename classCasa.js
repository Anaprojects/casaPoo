var Casa = /** @class */ (function () {
    // estado: string;
    // janela: string;
    // porta: string;
    function Casa(cor) {
        this.cor = cor;
        // this.estado = estado;
        // this.janela = janela;
        // this.porta = porta
    }
    //CRIANDO MÉTODOS//
    Casa.prototype.mudarDeCor = function () {
        console.log("A nova cor \u00E9 ".concat(this.cor));
    };
    return Casa;
}());
var novaCorDaCasa = new Casa("Azul");
novaCorDaCasa.mudarDeCor();
