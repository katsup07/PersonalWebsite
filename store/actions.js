export default {
  // setAuth(context, value) {
  //   console.log("committing toggleAuth()...");
  //   context.commit("setAuth", value);
  // },
  setWebToken(context, value){
    context.commit('setWebToken', value);
  },

  async createMessage(context, message) {
    console.log("creating message...", message);
    // backend tasks...
    try{
    const response = await fetch('https://worksplore-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json', {
      method: 'POST',
      body: JSON.stringify(message
  ),
    });

    const responseData = await response.json();
    if(!response.ok){
      // TODO add error handling
      console.log('Something went wrong when creating message...', response);
      return false;
    }
    
    message.id = responseData.name;
    console.log('message in createMessage() action: ', message);
    context.commit("createMessage", message);
    return true;
  } catch(error){
     console.log(error);
     return false;
  }
    
  },

  setMessages(context, messages){
    context.commit('setMessages', messages);
  }
};
