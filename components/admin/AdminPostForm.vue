<template>
  <div>
    <form @submit.prevent="onSave">
      <AppControlInput v-model="editedComment.author" >Name</AppControlInput>
      <AppControlInput v-model="editedComment.title">Title</AppControlInput>
      <AppControlInput v-model="editedComment.email">Email</AppControlInput>
      <AppControlInput control-type="textarea" v-model="editedComment.content"
        >Content</AppControlInput
      >
      <AppButton type="submit">Save</AppButton>
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
      this.$store.dispatch('createMessage', this.editedComment);
      this.$router.push("/posts");
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
