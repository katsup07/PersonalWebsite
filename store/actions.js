export default {
  toggleAuth(context) {
    console.log("committing toggleAuth()...");
    context.commit("toggleAuth");
  },

  createComment(context, payload) {
    console.log("creating comment...", payload);
    // backend tasks...
    context.commit("createComment", payload);
  },
};
