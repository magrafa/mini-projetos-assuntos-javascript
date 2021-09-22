primo(15);
function primo(num) {
    for(let numero=2; numero<= num; numero++){
        if(numeroprimo(numero)) console.log(numero);
    }
}
function numeroprimo(numero){
    for(let div =2; div<numero;div++){
        if(numero%div===0){
            return false;
        }
    }
    return true;
}