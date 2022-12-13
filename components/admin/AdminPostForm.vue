<template>
  <div>
    <form @submit.prevent="onSave">
      <AppControlInput v-model="editedComment.author">Name</AppControlInput>
      <AppControlInput v-model="editedComment.title">Title</AppControlInput>
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
    <TheComments/>
  </div>
</template>
<script>
import AppButton from "../UI/AppButton.vue";
import AppControlInput from "../UI/AppControlInput.vue";
import TheComments from "../TheComments.vue";

export default {
  components: {
    AppButton,
    AppControlInput,
    TheComments,
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
           /*  thumbnailLink: "", */
            content: "",
          },
    };
  },
  methods: {
    onSave() {
      console.log("saving comment...", this.editedComment);
      this.$store.dispatch('createComment', this.editedComment);
      this.$router.push("/posts");
    },
    onCancel() {
      this.editedComment.author = "";
      this.editedComment.title = "";
      /* this.editedComment.thumbnailLink = ""; */
      this.editedComment.content = "";

      this.$router.push("/admin");
    },
  },
};
</script>
