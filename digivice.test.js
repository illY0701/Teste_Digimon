const { existeDigimon, podeEvoluir, temEnergia, tipoCerto } = require("./digivice");

// Testa se o Digimon existe
test("existeDigimon deve retornar true para Agumon", () => {
  expect(existeDigimon("Agumon")).toBe("Agumon registrado no Digivice!");
});

test("existeDigimon deve retornar false para Pikachu", () => {
  expect(existeDigimon("Pikachu")).toBe("Pikachu não foi encontrado no Digivice...");
});

// Testa se o Digimon pode evoluir
test("podeEvoluir deve retornar true para nível 12", () => {
  expect(podeEvoluir(12)).toBe("O Digimon está pronto para digievoluir!");
});

test("podeEvoluir deve retornar false para nível 5", () => {
  expect(podeEvoluir(5)).toBe("Ainda não possui nível suficiente para evoluir.");
});

// Testa se o Digimon tem energia
test("temEnergia deve retornar true para energia 30", () => {
  expect(temEnergia(30)).toBe("O Digimon ainda tem energia para a batalha!");
});

test("emEnergia deve retornar false para energia 0", () => {
  expect(temEnergia(0)).toBe("O Digimon está sem energia... precisa descansar.");
});

// Testa se o Digimon é do tipo correto
test("tipoCerto deve retornar true para Gabumon do tipo Gelo", () => {
  expect(tipoCerto("Gabumon", "Gelo")).toBe("Gabumon é do tipo Gelo!");
});

test("tipoCerto deve retornar false para Patamon do tipo Fogo", () => {
  expect(tipoCerto("Patamon", "Fogo")).toBe("Patamon não é do tipo Fogo, ele é do tipo Vento.");
});
