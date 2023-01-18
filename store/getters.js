export default {
  isAuth(state) {
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
};
