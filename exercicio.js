// Lista de jogadores
let jogadores = ["falleN", "chelo", "skullz", "Yuurih", "KSCERATO"];

// 1) Encontrar o índice do jogador "chelo"
let indiceChelo = jogadores.indexOf("chelo");
console.log("Índice de chelo:", indiceChelo);

// 2) Substituir "chelo" e "skullz" por "molodoy" e "YEKINDAR" usando .splice
jogadores.splice(indiceChelo, 2, "molodoy", "YEKINDAR");
console.log("Lista após substituição:", jogadores);

// 3) Criar lista com caracteres maiúsculos usando .map
let jogadoresMaiusculos = jogadores.map(nome => nome.toUpperCase());
console.log("Lista em maiúsculas:", jogadoresMaiusculos);

// 4) Ordenar a lista com nomes maiúsculos usando .sort
jogadoresMaiusculos.sort();
console.log("Lista ordenada:", jogadoresMaiusculos);

// 5) Filtrar apenas nomes que começam com "Y" usando .filter
let filtrados = jogadoresMaiusculos.filter(nome => nome.startsWith("Y"));
console.log("Nomes que começam com 'Y':", filtrados);
