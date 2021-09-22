// const celular ={
//     marcaCelular: 'ASUS',
//     tamanhoTela: {
//         vertical:155,
//         horizontal:75
//     },
//     capacidadeBateria: 5000,
//     ligar: function(){
//         console.log("Fazendo ligação...")
//     }
// }

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}
const celular1= criarCelular("xiaomi",6.2,8000)
console.log(celular1)

// pascal case - UmDoisTres... primeira letra maiuscula

function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    // esta referenciando o objeto atual
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligacao..")
    }
}
const smart = new Celular('samsung',6,3500);
console.log(smart)