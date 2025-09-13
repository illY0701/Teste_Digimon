const { existeDigimon, podeEvoluir, temEnergia, tipoCerto } = require("./digivice");

// ----------------------------
// Chamadas manuais para mostrar no terminal
// ----------------------------
console.log(existeDigimon("Agumon"));      // Agumon registrado no Digivice!
console.log(existeDigimon("Pikachu"));     // Pikachu não foi encontrado no Digivice...

console.log(podeEvoluir(12));              // O Digimon está pronto para digievoluir!
console.log(podeEvoluir(5));               // Ainda não possui nível suficiente para evoluir.

console.log(temEnergia(30));               // O Digimon ainda tem energia para a batalha!
console.log(temEnergia(0));                // O Digimon está sem energia... precisa descansar.

console.log(tipoCerto("Gabumon", "Gelo"));// Gabumon é do tipo Gelo!
console.log(tipoCerto("Patamon", "Fogo"));// Patamon não é do tipo Fogo, ele é do tipo Vento.
console.log(tipoCerto("Unknown", "Fogo"));// Esse Digimon não está registrado!
