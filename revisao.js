const nome = "Kauany"; // 
let numeroDaChamada = 11; 

const jogos = ["Free Fire", "Cod", "Minecraft"];

let i = 0;
while (i < jogos.length) {
    console.log(jogos[i]);
    i++;
}

const filmeFavorito = {
    nome: nome,
    titulo: "Inception", 
    anoLancamento: 2010, 
    notaIMDb: 8.8 
};

if (filmeFavorito.notaIMDb <= 4.0) {
    console.log("O filme possui uma nota considerada baixa.");
} else if (filmeFavorito.notaIMDb > 4.0 && filmeFavorito.notaIMDb <= 7.0) {
    console.log("O filme é considerado razoável.");
} else {
    console.log("O filme é muito bom!");
}

function verificaChuva(previsaoTempo) {
    for (let dia of previsaoTempo) {
        if (dia.chanceDeChuva > 50) {
            console.log(`No dia ${dia.dia}, levar guarda-chuva`);
        } else {
            console.log(`No dia ${dia.dia}, tempo agradável`);
        }
    }
}

const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
];

verificaChuva(previsaoTempo);