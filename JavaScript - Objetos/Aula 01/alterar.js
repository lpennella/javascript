const pessoa = {
    nome: "Lucas",
    profissão: "Engenheiro"
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "19 998187228";

console.log(pessoa.telefone);

pessoa.nome = "Lucas Pennella";

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro"
};

pessoa = novaPessoa;