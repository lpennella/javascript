import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User("Lucas", "l@l.com", "2000-01-01");
// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2000-01-01");
// console.log(novoAdmin.nome);
// novoAdmin.nome = "";
// console.log(novoAdmin.nome);

const novoDocente = new Docente("Daniela", "d@d.com", "2000-01-01");
// console.log(novoDocente);
console.log(novoDocente.exibirInfos());
// console.log(novoDocente.aprovaEstudante("Daniela", "JS"));
