

/*const database = new Database();

function criarUsuario(id, nome, email) {
  const novoUsuario = { id, nome, email };
  database.addUser(novoUsuario);
  console.log(`Usuário ${nome} adicionado com sucesso!`);
}


criarUsuario(1, 'João', 'joao@example.com');
console.log(database.users);*/


class UserService {
  constructor(Database1){
    this.Database1 = Database1


  }

  criarUsuario(name){
    // criar um id unico usando o timestamp
    const id = Date.now()
    const user = {id,name};
    this.Database1.users.push(user);
    return user;

  };
  listarUsuario(id){
    return this.Database1.users.find(user => user.id === id)


  }
}

export default UserService;
