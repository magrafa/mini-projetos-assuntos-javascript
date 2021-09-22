contaAster(20);

function contaAster(quant){
//    let padrao= '';
//     for(let w=1;w<=quant;w +=1){
//         padrao += "*"
//         console.log(w+' '+padrao);

//     }

    for(let w=1;w<=quant;w +=1){
        let padrao= '';
        for(let i =0; i<w;i++){
            padrao += "*" 
        }
        
        console.log(w+' '+padrao);

    }
}