///////function/////////////////////////////////////////////

verbo + substantivo

let corSite = "azul";
function resetaCor(cor){
    corSite = 'amarelo';
};

console.log(corSite);
resetaCor();
console.log(corSite);


function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor('rosa', ' escuro');
console.log(corSite);


let nomes = null;
let nom= null;

function mudaNome(nome,sobrenome){
    nomes = "fabio";
    nom = nome + '' + sobrenome;

};


console.log(nomes)
mudaNome();
console.log(nomes);
////////////////////////////////////////////////////////

function dizerNome(){
    console.log('Magnoo');
};

dizerNome();

function multiplicandoPor2(valor){
    return valor*2;
};

console.log(multiplicandoPor2(44));

let resultado = multiplicandoPor2(2);
console.log(resultado);
////////////////////////////////////////////////////////////////////////////////