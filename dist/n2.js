"use strict";
var Veiculos = /** @class */ (function () {
    function Veiculos(_modelo, _marca, _ano, _valorLocacao, _qtdDias) {
        this._modelo = _modelo;
        this._marca = _marca;
        this._ano = _ano;
        this._valorLocacao = _valorLocacao;
        this._qtdDias = _qtdDias;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        //Getters
        get: function () {
            return this._modelo;
        },
        //Setters
        set: function (modelo) {
            if (modelo == '') {
                throw new Error('Modelo inválido');
            }
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if (marca == '') {
                throw new Error('Marca inválida');
            }
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            if (ano == '') {
                throw new Error('Formato de ano inválido');
            }
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valorLocacao", {
        get: function () {
            return this._valorLocacao;
        },
        set: function (valorLocacao) {
            if (valorLocacao <= 0) {
                throw new Error('Valor inserido tem que ser maior que 0');
            }
            this._valorLocacao = valorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "qtdDias", {
        get: function () {
            return this._qtdDias;
        },
        set: function (qtdDias) {
            if (qtdDias <= 0) {
                throw new Error('Número de dias tem que ser maior que 0');
            }
            this._qtdDias = qtdDias;
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.passeio = function () {
        return this.valorLocacao * this.qtdDias;
    };
    return Veiculos;
}());
var veiculo = new Veiculos('SUV', 'FIAT', '2000', 600, 15);
try {
    // veiculo.ano = '2020'
    // veiculo.marca = 'FIAT'
    veiculo.modelo = 'ADS';
    veiculo.qtdDias = 20;
    console.log(veiculo);
    console.log(veiculo.passeio().toFixed(2));
}
catch (error) {
    console.log(error.message);
}
