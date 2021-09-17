class Veiculos{
    constructor(
        private _modelo:string,
        private _marca:string,
        private _ano:number,
        private _valorLocacao:number,
        private _qtdDias:number
    ){ }
    
    //Getters
    get modelo(){
        return this._modelo
    }
    
    get marca(){
        return this._marca
    }
    get ano(){
        return this._ano
    }
    
    get valorLocacao(){
        return this._valorLocacao
    }
    
    get qtdDias(){
        return this._qtdDias
    }
    
    //Setters
    set modelo(modelo:string){
        if(modelo == ''){
            throw new Error('Modelo inválido')
        }

        this._modelo = modelo
    }

    set marca(marca:string){
        if(marca == ''){
            throw new Error('Marca inválida')
        }
        this._marca = marca
    }

    set ano(ano:number){
        if(ano <= 0){
            throw new Error('Formato de ano inválido')
        }

        this._ano = ano
    }
    
    set valorLocacao(valorLocacao:number){
        if(valorLocacao <= 0){
            throw new Error('Valor inserido tem que ser maior que 0')
        }
        this._valorLocacao = valorLocacao
    }
    
    set qtdDias(qtdDias:number){
        if(qtdDias <= 0){
            throw new Error('Número de dias tem que ser maior que 0')
        }
        this._qtdDias = qtdDias
    }

    public passeio(){
        return this.valorLocacao * this.qtdDias
    }
}

const veiculo = new Veiculos('SUV', 'FIAT', 2000, 600, 15)

try{
    veiculo.ano = 2000
    veiculo.marca = 'FIAT'
    veiculo.modelo = 'ADS'
    veiculo.qtdDias = 20
    console.log(veiculo)
    console.log(veiculo.passeio().toFixed(2))
}catch(error:any){
    console.log(error.message)
}
