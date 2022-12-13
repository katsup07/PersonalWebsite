<template>
  <section class="posts-list">
    <PostPreview
      :id="id"
      :isAdmin="isAdmin"
      :thumbnail="thumbnail"
      :title="title"
      :previewText="previewText"
    />
  </section>
</template>
<script>
import PostPreview from "./PostPreview.vue";

export default {
  components: {
    PostPreview,
  },
  props:{
    isAdmin:{
      type: Boolean,
      required: true,
    }
  }
};
</script>
<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>
