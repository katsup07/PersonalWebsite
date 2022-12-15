export default  {
  // setAuth(state, value) {
  //   console.log("mutating toggleAuth()...", value);
  //   state.isAuth = value;
  // },
  
  setWebToken(state, value){
    console.log("mutating setWebToken()...", value);
    state.webToken = value;
  },

  createMessage(state, comments){
    console.log('mutating via createMessage()', comments);
    state.comments.push(comments);
    console.log(state.comments);
  },

  setMessages(state, comments){
    const newComments = [...comments];
    state.comments = newComments;
  }
};