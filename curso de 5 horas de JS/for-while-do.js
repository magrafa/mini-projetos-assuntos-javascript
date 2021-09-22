
/////////////////////////////////////////////////////////////////////
/////// for e while
// do ... while
// for ..in 
// for..of

for(let i = 0; i <= 5; i++){
    console.log("alalalalala",i);
    if(i%2 !== 0){
        //se o resto da divisao por 2 é diferente de zero = impar
        console.log('impar: '+i);
    }
    
}


///// while /////
let i = 5;

while(i>=1){
    if(i%2 !==0){
        console.log(i);
    }
    i--;
}


/////// do while
// aqui ele faz primeiro e dps vai pro while?
do{
    console.log('digitando!' + i);
    i++;
}while(i < 10)


//// for in//

const pessoaa = {
    nome: 'Rafael',
    idade: 21
};

for(let key in pessoaa){
    console.log(key,pessoaa['idade']);
}

const cores = ['vermel', 'azu', 'verd'];

for(let indice in cores){
    console.log(indice, cores[indice]);
};

// for of//////////

for(let tes of cores){
    console.log(tes);
}
