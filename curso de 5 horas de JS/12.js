

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
    
}

const endereco= new Endereco("princesa isabel",'barreiras',47800000);
const endereco2= new Endereco("princesa isabel",'barreiras',47800000);

function iguais(endereco,endereco2){
    return endereco.rua === endereco2.rua &&
        endereco.cidade === endereco2.cidade &&
        endereco.cep === endereco2.cep

}

function temEndereco(endereco,endereco2){
    return endereco === endereco2;

}

console.log(iguais(endereco,endereco2));
console.log(temEndereco(endereco,endereco2));