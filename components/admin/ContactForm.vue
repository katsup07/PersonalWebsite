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
      <AppButton :class="'confirm'" type="submit">Send</AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
        >Cancel</AppButton
      >
    </form>
    <InfoAlert v-if="showAlertMessage">
      {{alertMessage}}
      <div v-if="error">
        <AppButton @click="onCloseInfoAlert">Confirm</AppButton>
      </div>
    </InfoAlert>
  </div>
</template>
<script>
import AppButton from "../UI/AppButton.vue";
import AppControlInput from "../UI/AppControlInput.vue";
import MessagesViewer from "../MessagesViewer.vue";
import InfoAlert from '../InfoAlert.vue';

export default {
  components: {
    AppButton,
    AppControlInput,
    MessagesViewer,
    InfoAlert,
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
          showAlertMessage: false,
          alertMessage: "Message sent. Redirecting back to home page...", 
          error: false,
    };
  },
  methods: {
    onSave() {
      this.error = false;
      console.log("saving comment...", this.editedComment);
      const result = this.$store.dispatch('createMessage', this.editedComment);

      if(result !== false){
        this.showAlertMessage = true;
        setTimeout( () => {
          this.$router.push("/posts");
        }, 3000)
        return
      }
      result === false
      this.error = true;
      this.showAlertMessage = true;
      this.alertMessage = 'Something went wrong... Please try again or send an email instead.';
    },

    onCloseInfoAlert(){
      this.error = false;
      this.showAlertMessage = false;
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
<style scoped>
form{
  margin-bottom: 1rem;
}
</style>