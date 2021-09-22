let faixas = [
    {tooltip: 'ate R$700', minimo: 0, maximo:700},
    {tooltip: 'de R$700 ate R$1000', minimo: 700, maximo:100},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo:10000000}
];



console.log(faixas);

function criarFaixa(tooltip,min,max){
    return{
        tooltip,
        min,
        max
    }
}

let faixas2 = [
    criarFaixa('t1','1','100'),
    criarFaixa('t2','100','1000'),
    criarFaixa('t3','1000','1000000')
]


console.log(faixas2);

function FaixaPreco(tool,min,max){
    this.tool = tool,
    this.min = min,
    this.max = max
}

let faixas3 = [new FaixaPreco('as',10,20),new FaixaPreco('sd',20,30),new FaixaPreco('df',30,40)]

console.log(faixas3);