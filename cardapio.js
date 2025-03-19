let lanches = [["hum", 5], ["bombom", 2], ["rifregerante", 4], ["Pastel", 8], ["sorvete", 5]];

console.log(lanches[0][1])

function mostraCardapio() {
   console.log("Cardápio:");
   lanches.forEach((item, index) => {
       console.log(`${index + 1} - ${item[0]} R$ ${item[1]}`);
   });
}




function adicionaLanche(nome, preco) {
   lanches.push([nome, preco]);
   console.log(`${nome} foi adicionado ao cardápio com o valor de R$ ${preco}`);
}




function cardapioEspecial() {
   console.log("\nCardápio Especial para Clientes Fidelizados (15% de Desconto):");
   lanches.forEach((item, index) => {
       let precoDesconto = item[1] * 0.85;
       console.log(`${index + 1} - ${item[0]} R$ ${precoDesconto.toFixed(2)}`);
   });
}




console.log("Executando o Cardápio...");
mostraCardapio();
adicionaLanche("risolhos", 6);
mostraCardapio();
cardapioEspecial();
