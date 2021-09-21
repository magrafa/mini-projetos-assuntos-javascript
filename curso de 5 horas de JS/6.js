let filme = {
    titulo: 'Abc',
    ano: 1999,
    diretor: "lucas film",
    personagem: 'c3p0'
}
mostraString(filme);
function mostraString(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop])
        }
        // else(typeof obj[prop]==='number')
        //     console.log('numer')
        if(typeof obj[prop] === 'number'){
            console.log('number: '+ prop,obj[prop])
        }
        
    }
}
