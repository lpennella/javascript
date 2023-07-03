const cliente = {
  nome: "Lucas",
  idade: 24,
  email: "lucas@yopmail.com",
  telefone: ["19 998187228", "19 991997227"],
};

cliente.endereços = [
  {
    rua: "R. Joseph Climber",
    numero: 100,
    apartamento: true,
    complemento: "ap 934",
  },
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
}
