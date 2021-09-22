//////////////////////////////////////////////////////////////////////////////////////////////
// operadores: Aritimeticos
//             Atribuição
//             de comparação
//             logicos
//             bitwise



let salario = 100;
//   + - * / **

//   ++ --  = + 1 ou = - 1



let valorPc = 5000;

// valor a direita sendo passado para variavel à esquerda
 valorPc += valorPc // valorPc = 5000 + 5000



//  operadores de igualdade
// igualdade estrita
console.log(1 === 1); //ele vai retornar true
console.log(2 === 1); //ele vai retornar false
console.log('1' === 1); //ele vai retornar false

console.log( '2' == 2);


// operador iterario

let pontos = 100/
// let tipos = pontos > 100 ? 'pre' : 'com';
console.log(tipos);


// operador logico 'e' &&     ou  ||
console.log(true&&false);

let maior18 = false;
let possui = true;
let podeAplicar= maior18&&possui;
console.log(podeAplicar);


// operador not

// falsy
// undefiend
// null
// 0
// false
// ''
// NaN

// Truthy
// qualquer um menos os de cima




let a = 'red';
let b = 'blue';

// console.log(a);
// console.log(b);

function mudaCor(){
    a = 'blue',
    b = 'red'
};
console.log(a);
console.log(b);
mudaCor();
console.log('agora é: ' +a);
console.log(b);

let blu = "blu";
let re = "re"
console.log(blu);
console.log(re + "  aa");
let c = blu;
blu = re;
re = c;

console.log(blu);
console.log(re);