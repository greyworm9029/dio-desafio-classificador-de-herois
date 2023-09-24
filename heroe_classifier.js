// Desafio: Classificador de Heróis

// 'Heroe' armazena o nome e o xp do herói
let heroe = {
    character: "Daniel",
    exp: 989,
};

switch (true) {
    case heroe.exp < 1000:
        console.log(`Se XP for menor do que 1.000 = Ferro`);
        break;

    case heroe.exp >= 1000 && heroe.exp <= 2000:
        console.log(`Se XP for entre 1.001 e 2.000 = Bronze`);
        break;
   
    case heroe.exp >= 2001 && heroe.exp <= 5000:
        console.log(`Se XP for entre 2.001 e 5.000 = Prata`);
        break;
  
    case heroe.exp >= 6001 && heroe.exp <= 7000:
        console.log(`Se XP for entre 6.001 e 7.000 = Ouro`);
        break;
   
    case heroe.exp >= 7001 && heroe.exp <= 8000:
        console.log(`Se XP for entre 7.001 e 8.000 = Platina`);
        break;

    case heroe.exp >= 8001 && heroe.exp <= 9000:
        console.log(`Se XP for entre 8.001 e 9.000 = Ascendente`);
        break;
        
    case heroe.exp >= 9001 && heroe.exp <= 10000:
        console.log(`Se XP for entre 9.001 e 10.000 = Imortal`);
        break;

    default:
        console.log(`Se XP for maior ou igual a 10.001 = Radiante`);
};

// Execução do programa 
while (heroe.exp < 1000) {
    console.log(`The Hero named by ${heroe.character} is on level ${heroe.exp}.`);
    heroe.exp += 1000; // Incrementa o XP para que o loop não seja infinito
}