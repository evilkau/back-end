let livros=require("./livro.json")


function mostraLivros() {
    livros.forEach((livro) => {
        console.log(`${livro.titulo} - ${livro.autor} - Ano: ${livro.ano} - Páginas: ${livro.paginas} - Preço: R$ ${livro.preco.toFixed(2)}`);
    });
}

//Gera um arquivo JSON dos livros
function criarArquivo(){
    let livroTexto = JSON.stringify(livros);
    const fs = require ('fs');
    fs.writeFileSync("livro.json", livroTexto)
}

//criarArquivo();

mostraLivros();