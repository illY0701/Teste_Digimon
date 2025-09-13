// ----------------------------
// Lista simples de Digimons e seus tipos
// ----------------------------
const digimons = {
  "Agumon": "Fogo",
  "Gabumon": "Gelo",
  "Patamon": "Vento",
  "Tentomon": "Elétrico"
};

// ----------------------------
// Funções principais do Digivice
// ----------------------------

// Verifica se o Digimon existe no Digivice
function existeDigimon(nome) {
  if (digimons.hasOwnProperty(nome)) {
    return `${nome} registrado no Digivice!`; // Retorna mensagem de sucesso
  }
  return `${nome} não foi encontrado no Digivice...`; // Retorna mensagem de erro
}

// Verifica se o Digimon pode evoluir
function podeEvoluir(nivel) {
  return nivel >= 10
    ? "O Digimon está pronto para digievoluir!"  // Pode evoluir
    : "Ainda não possui nível suficiente para evoluir."; // Nível insuficiente
}

// Verifica se o Digimon ainda tem energia
function temEnergia(energia) {
  return energia > 0
    ? "O Digimon ainda tem energia para a batalha!"  // Energia suficiente
    : "O Digimon está sem energia... precisa descansar."; // Sem energia
}

// Verifica se o Digimon é do tipo correto
function tipoCerto(nome, tipo) {
  if (!digimons[nome]) return "Esse Digimon não está registrado!"; // Digimon inexistente
  return digimons[nome] === tipo
    ? `${nome} é do tipo ${tipo}!` // Tipo correto
    : `${nome} não é do tipo ${tipo}, ele é do tipo ${digimons[nome]}.`; // Tipo incorreto
}

// Exporta as funções para poder usar nos testes e no CLI
module.exports = { existeDigimon, podeEvoluir, temEnergia, tipoCerto };
