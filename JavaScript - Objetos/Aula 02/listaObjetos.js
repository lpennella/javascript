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

cliente.endereços.push({
  rua: "R. Joseph Ladder",
  numero: 404,
  apartamento: false,
  complemento: "casa",
});

const listaApenasApartamentos = cliente.endereços.filter(
  (endereço) => endereço.apartamento === true
);

console.log(listaApenasApartamentos);
