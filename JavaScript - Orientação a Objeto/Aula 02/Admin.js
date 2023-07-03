import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "Admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  exibirInfos() {
    return `${this.nome}, ${this.role}, ${this.ativo}`;
  }

  criarCurso(nomedoCurso, vagas) {
    return `Criado de ${nomedoCurso} criado com ${vagas} vagas`;
  }
}
