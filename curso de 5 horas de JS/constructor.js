function Postagem(titulo,msg,autor){
    this.titulo = titulo,
    this.msg = msg,
    this.autor = autor,
    this.visu=0,
    this.coment=[],
    this.estaAoV= false
}

let postagem = new Postagem('a','b','c');
console.log(postagem);