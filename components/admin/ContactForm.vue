<template>
  <div>
    <h1>Contact Form</h1>
    <p>Please fill in your information below.</p>
    <form @submit.prevent="onSave">
      <AppControlInput v-model="editedComment.author" >Name</AppControlInput>
      <AppControlInput v-model="editedComment.email">Email</AppControlInput>
      <AppControlInput v-model="editedComment.title">Title</AppControlInput>
      <AppControlInput control-type="textarea" v-model="editedComment.content"
        >Content</AppControlInput
      >
      <AppButton :class="'confirm'" type="submit">Save</AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
        >Cancel</AppButton
      >
    </form>
  </div>
</template>
<script>
import AppButton from "../UI/AppButton.vue";
import AppControlInput from "../UI/AppControlInput.vue";
import MessagesViewer from "../MessagesViewer.vue";

export default {
  components: {
    AppButton,
    AppControlInput,
    MessagesViewer,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedComment: this.comment
        ? { ...this.comment }
        : {
            author: "",
            title: "",
            email: "",
            content: "",
          },
    };
  },
  methods: {
    onSave() {
      console.log("saving comment...", this.editedComment);
      const result = this.$store.dispatch('createMessage', this.editedComment);
      if(result !== false){
      alert('Message successfully sent.')
      return this.$router.push("/posts");
      }

      alert('Something went wrong... please try again or send an email instead.')
    },
    onCancel() {
      this.editedComment.author = "";
      this.editedComment.title = "";
      this.editedComment.email = "";
      this.editedComment.content = "";

      this.$router.push("/admin");
    },
  },
};
</script>
