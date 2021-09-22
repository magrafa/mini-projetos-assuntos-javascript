somar(10);
function somar(limite) {
    let multiplo5 = 0;
    let multiplo3 = 0;
    for(let i =0; i<=limite;i++){
        if(i%3 === 0){
            multiplo3 = multiplo3 +i
        }
        if(i%5 === 0){
            multiplo5 = multiplo5 +i
        }
        
    }
    console.log(multiplo3+multiplo5);
}
