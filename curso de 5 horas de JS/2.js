let num1=10;
let num2=20;
comparaNum(num1,num2);
function comparaNum (num1,num2){
    if (num1 > num2){
        console.log('o numero maior é: ' + num1 )
        return num1;
        break;
    }
    else if (num2 > num1){
        console.log('o numero maior é: ' + num2 )
        return num2;
        break;
    }
    else {
        console.log(' numeros iguais ')
        return;
        break;
    }
}
