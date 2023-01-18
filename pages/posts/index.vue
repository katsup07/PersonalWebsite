<template>
    <div class="posts">
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :thumbnail="post.thumbnail"
        :previewText="post.previewText"
      ></PostPreview>
    </div>
</template>
<script>
import PostPreview from "../../components/posts/PostPreview.vue";

export default {
  layout: 'default',
  components: {
    PostPreview,
  },
  computed: {
  posts() {
    return this.$store.getters.getPosts;
  },
  }
};
</script>

<style scoped>
* {
  color: rgb(16, 19, 32);
}
.posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("/assets/images/smart-phone.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 0.2rem;
  margin: 0;
}

.intro h1 {
  text-align: center;
  font-weight: 900;
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: rgb(16, 19, 32);
  background-color: rgba(97, 221, 99, 0.695);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0.3rem 0.3rem 0.5rem 0.01rem rgb(177, 177, 177);
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>



