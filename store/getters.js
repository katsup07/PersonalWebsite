export default {
  isAuth(state) {
    console.log("getting isAuth...");
    return state.isAuth;
  },
  getComments(state) {
    return state.comments;
  },
  
  getPosts(state) {
    return state.posts;
  }
};
