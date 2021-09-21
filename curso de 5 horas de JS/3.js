//// fizzBuzz //////////////
// divisivel por 3 fizz
// divisivel por 5 buzz
// divisivel por 3 && 5 fizzbuzz
// nao divisivel return a entrada

const result = fizzBuzz(30);
console.log(result);
function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        return "nao vale";
    }
    else if(entrada % 3 === 0 && entrada % 5 === 0){
        return entrada + " é FizzBuzz";
    }
    else if(entrada%3 ===0){ 
        return "é divisivel por 3";
    }
    else if(entrada%5 ===0){   
        return "é divisivel por 5";
    }
    
    else{
        return entrada;
    }

}