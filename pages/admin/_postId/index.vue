<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "../../../components/admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "Luke",
        title: "The Silliest Idea",
        content: "Let me tell you about my silly idea...",
        thumbnailLink: "./assets/images/coding.jpg",
      },
    };
  },
  provide(){
    
  }
};
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
