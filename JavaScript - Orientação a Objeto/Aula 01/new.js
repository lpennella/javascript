// function User(nome, email) {
//   this.nome = nome;
//   this.email = email;

//   this.exibirInfos = function () {
//     return `${this.nome}, ${this.email}`;
//   };
// }

// const novoUser = new User("Vinicius", "v@v.com");
// console.log(novoUser.exibirInfos());

// function Admin(role) {
//   User.call(this, "Vinicius", "v@v.com");
//   this.role = role || "Estudante";
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("admin");
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfo: function () {
    return this.nome;
  },
};

const novoUser = Object.create(user);
novoUser.init("Vinicius", "v@v.com");
console.log(novoUser.exibirInfo());
// console.log(user.isPrototypeOf(novoUser));
