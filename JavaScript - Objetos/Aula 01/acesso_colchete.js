const cliente = {
  nome: "Lucas",
  idade: 22,
  cpf: "12345678",
  email: "lucas@yopmail.com",
};

console.log(
  `O nome do cliente é: ${cliente["nome"]} e ele tem ${cliente["idade"]} anos de idade`
);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});
