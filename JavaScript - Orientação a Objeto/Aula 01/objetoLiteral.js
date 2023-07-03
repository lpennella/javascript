const user = {
  nome: "Lucas",
  email: "l@l.com",
  nascimento: "2000-01-01",
  role: "estudante",
  ativo: true,
  exibirInfo: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Helena",
  email: "h@h.com",
  nascimento: "1999-01-01",
  role: "admin",
  ativo: true,
  criarCurso() {
    console.log("Curso criado!");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();
