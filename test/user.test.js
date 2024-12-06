import Database1 from "../datebase";
import UserService from "../user";
import PostService from "../postService";

describe('Teste Integração entre o UserServe e o PostService', ()=>{
let database1 ;
let userService;
let postService;

beforeEach(() =>{
database1 = new Database1();
userService = new UserService(database1)
postService = new PostService(database1)


})
it("Testar a criação um usuário",()=>{
const user = userService.criarUsuario("Jefeson")
expect(user.name).toBe("Jefeson")
expect(user).toHaveProperty('id')

})
it("Criar uma postagem associada a um usuario", ()=>{
    const user = userService.criarUsuario("Rhaun Gustavo")
    const post = postService.criarpost(user.id, "Hadassa")



    expect(post.userid).toBe(user.id)
    expect(post.content).toBe("Hadassa")


});

it("Criar uma postagem associada a um usuario", ()=>{
    const user = userService.criarUsuario("Diego")
    const post = postService.criarpost(user.id, "Ola")

    const postagem = postService.buscapostporid(user.id)
    expect(postagem.length).toBe(1);
    expect(postagem[0].content).toBe("Ola");

   


})



})
