const numeroo = 11;
parimpa(numeroo);
function parimpa(valor){
    for(let i =0; i<=valor; i++){
       if (i%2 ===0){
            console.log(i + ' é par')
        }
        else{
            console.log(i + ' é impar')
        } 
    }
}