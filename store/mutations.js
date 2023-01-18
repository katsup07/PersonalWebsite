export default  {  
  setWebToken(state, value){
    state.webToken = value;
  },

  createMessage(state, comments){
    state.comments.push(comments);
    console.log(state.comments);
  },

  setMessages(state, comments){
    const newComments = [...comments];
    state.comments = newComments;
  }
};