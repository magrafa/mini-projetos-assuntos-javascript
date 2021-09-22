
let endereco= {
    Rua:"princesa isabel",
    Cidade:'barreiras',
    CEP:478000
}

function exibir(endereco){
    for(let chave in endereco) 
    //for in permite mudar as propriedades de um objeto
    // Rua:"rua princesa isabel", /////////// chave seria a Rua ... chave in ...endereco seria o conteudo
    // Cidade:'barreiras',
    ///CEP:478000
        console.log(chave,endereco[chave]);
}
console.log(exibir(endereco));