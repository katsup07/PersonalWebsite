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
    const response = await fetch('https://worksplore-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json', {
      method: 'POST',
      body: JSON.stringify(message
  ),
    });

    const responseData = await response.json();
    if(!response.ok){
      // TODO add error handling
      return console.log('Something went wrong when creating message...', response);
    }

    message.id = responseData.name;
    console.log('message in createMessage() action: ', message);
    context.commit("createMessage", message);
  },

  setMessages(context, messages){
    context.commit('setMessages', messages);
  }
};
