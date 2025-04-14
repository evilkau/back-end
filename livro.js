let livros=require("./livro.json")


function mostraLivros() {
    livros.forEach((livro) => {
        console.log(`${livro.titulo} - ${livro.autor} - Ano: ${livro.ano} - Páginas: ${livro.paginas} - Preço: R$ ${livro.preco.toFixed(2)}`);
    });
}

function adicionarlivro(titulo,autor,editora,ano,sinopse,paginas,genero,preco){
    livros.push({
        titulo:titulo,
        autor:autor,
        editora:editora,
        ano:ano,
        sinopse:sinopse,
        paginas:paginas,
        genero:genero,
        preco:preco,
    });
    console.log("livro adicionado com sucesso");

}
adicionarlivro("O Pequeno Principe","Leonardo Devinci","Tilibra",2025,
"Um principe que era pequno",1,["terror","webtoon","comedia"],500.99);


//Gera um arquivo JSON dos livros
function criarArquivo(){
    let livroTexto = JSON.stringify(livros);
    const fs = require ('fs');
    fs.writeFileSync("livro.json", livroTexto)
}

//criarArquivo();

mostraLivros();