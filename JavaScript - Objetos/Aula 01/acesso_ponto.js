const cliente = {
    nome: "Lucas",
    idade: 22,
    cpf: "12345678",
    email: "lucas@yopmail.com"
};

console.log(`O nome do cliente é: ${cliente.nome} e ele tem ${cliente.idade} anos de idade`);
console.log(`Os 3 primeiros dígitos do CPF são: ${cliente.cpf.substring(0, 3)}`);