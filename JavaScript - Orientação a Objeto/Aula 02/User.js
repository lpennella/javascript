export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "Estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    this.#email;
  }

  get nascimento() {
    this.#nascimento;
  }

  get role() {
    this.#role;
  }

  get ativo() {
    this.#ativo;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error(console.error("Formato não válido"));
    }
    this.#nome = novoNome;
  }

  exibirInfos() {
    return `${this.#nome}, ${this.#email}, ${this.#nascimento}, ${
      this.#role
    }, ${this.#ativo}`;
  }
}
