const cliente = {
    nome: "Lucas",
    idade: 24,
    email: "lucas@yopmail.com",
    telefone: ["19 998187228", "19 991997227"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
  };

cliente.efetuaPagamento(25);