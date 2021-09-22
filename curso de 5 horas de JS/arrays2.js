////add elemntos
////encontrar elemntos
////remover elementos
////dividir/
////dividir arrays
////combinar

// const num = [1,2,3];
// console.log(num);
// //inserir inicio
// num.unshift(0);
// console.log(num);
// //meio
// num.splice(1,0,'d');
// console.log(num);
// //final
// num.push(55);
// console.log(num);


// //encontrar elemntos

// const b = [11,22,33,11,44];
// console.log(b.indexOf(2)!= -1);
// console.log(b.indexOf(22));
// console.log(b.lastIndexOf(11));


////encontrar elemntos

// const bas = [
//     {id:1,nome:'a2'},
//     {id:2,nome:'b'},
// ];
// console.log(bas.includes({id:1,nome:'a'}));
// const ba = bas.find(function (ba) { 
//     return ba.nome === 'a2'});
// console.log(ba);


// const bas = [
//     {id:1,nome:'a2'},
//     {id:2,nome:'b'},
// ];

// const ba = bas.find(ba=> ba.nome === 'a2');
// console.log(ba);

// const numeros = [1,2,3,4,5,6];
// numeros.push();
// numeros.unshift();
// numeros.splice();

//final
// const ultimo = numeros.pop();
// console.log(ultimo);
// console.log(numeros);

//inicio
// const ult = numeros.shift();
// console.log(ult);
// console.log(numeros);

// const ulti = numeros.splice(2,1);
// console.log(ulti);
// console.log(numeros);


//esvaziar
let numeross = [1,2,3,4,5,6];
 numeross.length= 0;
// numeross.splice(0,numeross.length);
// console.log(numeross);


////combinar
const um=[1,2,3,4];
const uma=[5,6,7,8];

const combinado= um.concat(uma);
// console.log(combinado);
////

//dividir
// const dividido =combinado.slice();
// console.log(dividido);

const combin = [...um,...uma];
//console.log(combin);
const clonado = [...combin];
//console.log(clonado);

const teste = [1,2,3];
const teste2=[4,5,6];
const dois =[...teste,'%',...teste2];
//console.log(dois);



//////iterando um array
const numer = [1,2,3,4,5];

// numer.forEach((nume,ind)=>console.log(nume,ind))


////combinar///
 const numerof=[1,2,3,4,5];
 const combinadof = numerof.join('s');
 console.log(combinadof);

 const frase = 'ola vem ver o seu caminh'
const texto = frase.split(' ');
console.log(texto);
console.log(texto.join('-'));
