const celular ={
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical:155,
        horizontal:75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log("Fazendo ligação...")
    }
}

const novoObjt = Object.assign({}, celular);
console.log(novoObjt);
// const novoObjt = Object.assign({bateria:5000}, celular);
// console.log(novoObjt);
const objeto2 = {...celular};
console.log(objeto2);