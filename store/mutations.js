export default  {
  toggleAuth(state) {
    console.log("mutating toggleAuth()...");
    state.isAuth = !state.isAuth;
  },

  createComment(state, payload){
    console.log('current comments: ' + state.comments[0].content, state.comments.length);
    console.log('mutating via createComment()', payload);
    state.comments.push(payload);
  }
};