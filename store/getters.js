export default {
  isAuth(state) {
    console.log("getting isAuth...");
    return state.isAuth;
  },

  getWebToken(state){
    return state.webToken;
  },

  getComments(state){
    return state.comments;
  },
  
  getPosts(state) {
    return state.posts;
  }

//   -NJESeikKwg9c_eYfonM:{}
// author: "Test"
// content: "Does this work?"
// email: "luke@bear.com"
// title: "This is a test"
// }
};
