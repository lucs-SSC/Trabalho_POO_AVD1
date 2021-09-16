interface iEndereco{
    rua:string,
    numero: number,
    bairro: string,
    cidade: string
}

let endereco: iEndereco ={
    rua:'Cristiano Ottoni',
    numero:305,
    bairro: 'Centro',
    cidade: 'Barra Do Piraí'
}

console.log(endereco)