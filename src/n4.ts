class ImpostoDeRenda{
    constructor(
        protected _nome:string,
        protected _rendaAnual:number
    ){ }

    get nome(){
        return this._nome
    }

    get rendaAnual(){
        return this._rendaAnual
    }

    set nome(nome:string){
        if(nome == ''){
            throw new Error('Nome inválido')
        }

      this._nome = nome
    }

    set rendaAnual(rendaAnual:number){
        if(rendaAnual <= 0 ){
            throw new Error('A renda esperada tem que ser maior que 0')
        }

        this._rendaAnual = rendaAnual
    }
}

class PessoaFisica extends ImpostoDeRenda{
    constructor(
        nome:string,
        rendaAnual:number,
        protected _gastosComSaude:number
    ){ super(nome,rendaAnual) }
    
    get gastosComSaude(){
        return this._gastosComSaude
    }
    
    set gastosComSaude(gastosComSaude:number){
        this._gastosComSaude = gastosComSaude
    }

    public calcImpostoDeRendaPF(){
        if(this.rendaAnual < 20000){
            return this.rendaAnual * 0.15
        }else if(this.rendaAnual >=2000 && this.gastosComSaude == 0){
            return this.rendaAnual * 0.25
        }else if(this.rendaAnual >=2000 && this.gastosComSaude != 0){
            return (
                (this.rendaAnual * 0.25) - 
                (this.gastosComSaude * 0.5)
            )
        }
    }

    public message(){
        return `O imposto de renda do indivíduo ${this.nome} ficou em R$${this.calcImpostoDeRendaPF()}`
    } 
}

class PessoaJuridica extends ImpostoDeRenda{
    constructor(
        nome:string,
        rendaAnual:number,
        protected _numFuncionarios:number
    ){ super(nome,rendaAnual) }

    get numFuncionarios(){
        return this._numFuncionarios
    }
    
    set numFuncionarios(numFuncionarios:number){
        if(numFuncionarios == 0){
            throw new Error('Quantidade de funcionários inválida')
        }
        this._numFuncionarios = numFuncionarios
    }

    public calcImpostoDeRendaPJ(){
        if(this.numFuncionarios <= 10 ){
            return  this.rendaAnual * 0.16
        }else if(this.numFuncionarios >=10){
            return this.rendaAnual * 0.14
        }
    }

    public message(){
        return `O imposto da empresa ${this.nome} ficou em R$${this.calcImpostoDeRendaPJ()}`
    } 
}

let pessoa = new PessoaFisica('Léo',0, 3000)


// try{
//     pessoa.nome = 'Leo'
//     pessoa.rendaAnual = 50000
//     pessoa.gastosComSaude = 2000
//     console.log(pessoa)
//     console.log(pessoa.message())
// }catch(error:any){
//     console.log(error.message)
// }

let empresa = new PessoaJuridica('UniFoa', 400000, 15)

try{
    empresa.nome = 'UniFOA'
    empresa.rendaAnual = 400000
    empresa.numFuncionarios = 25
    console.log(empresa)
    console.log(empresa.message())
}catch(error:any){
    console.log(error.message)
}
