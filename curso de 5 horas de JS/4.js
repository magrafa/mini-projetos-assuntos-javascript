// verVelocidade(129);

function verVelocidade(valorV){
    const veloc = 70;
    const kmP = 5;
    if(valorV <=veloc){
        console.log("velocidade ok")
    }
    else{
        const pontos=Math.floor((valorV - veloc)/kmP);
        if(pontos >= 12){
            console.log('carteira suspensa')
        }
        else{
            console.log('pontos: '+pontos)
        }
    }
   
    
}