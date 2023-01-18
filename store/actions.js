export default {
  setWebToken(context, value){
    context.commit('setWebToken', value);
  },

  async createMessage(context, message) {
    try{
    const response = await fetch('https://worksplore-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json', {
      method: 'POST',
      body: JSON.stringify(message),
    });

    const responseData = await response.json();
    if(!response.ok){
      console.log('Something went wrong when creating message...', response);
      throw responseData;
    }
    
    message.id = responseData.name;
    context.commit("createMessage", message);
    return true;
  } catch(error){
     console.log(error);
     throw error;
    }
  },

  setMessages(context, messages){
    context.commit('setMessages', messages);
  }
};
