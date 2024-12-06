class PostService {
constructor(database1){
this.database1 = database1;


}

criarpost (userid,content){

const postId = Date.now()
const post = { id: postId , userid,content}
this.database1.posts.push(post);
return post;
}

buscapostporid(userId){
return this.database1.posts.filter(post => post.userid === userId);



}

}

export default PostService;