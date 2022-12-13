<template>
  <div class="home-page">
    <section class="intro">
      <h1>Explore and Discover</h1>
    </section>
    <section class="mission-statement">
      <div class="nav-header-and-compass">
        <h2>Site Navigation</h2>
        <img class="compass-icon" src="~static/assets/icons/compass-regular.svg" alt="compass icon"/>
      </div>
      <p>This site contains information about my background and personal interests. Click the AboutMe link above in the navigation bar to get a general overview. After that proceed to the topics section for further details. If you have any questions, please feel free to contact me. Thank-you for visiting!</p>
    </section>
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
    <!-- :isAdmin="$store.getters.isAuth" -->
  </div>
</template>
<script>
import PostPreview from "../components/posts/PostPreview.vue";

export default {
  layout: 'default',
  components: {
    PostPreview,
  },
  computed: {
  posts() {
    console.log(this.$store.getters.getPosts.length);
    return this.$store.getters.getPosts;
  },
  }
};
</script>

<style scoped>
* {
  color: rgb(16, 19, 32);
}

h2, p{
  margin: 0;
  padding: 0.3rem;
}
h2{
  font-size: 1.3rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}

p{
 font-size: 0.85rem;
}
.nav-header-and-compass{
  display: flex;
}
.compass-icon{
  max-width: 1.5rem;
}
.posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.mission-statement{
  margin: 1rem;
   box-shadow: 0.1rem 0.1rem 0.2rem 0.01rem rgb(211, 211, 211);
   border: 1px solid rgb(226, 226, 226);
   border-radius: 0rem;
   background-color: rgb(242, 242, 242);
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
  color: rgb(32, 32, 32);
  font-size: 1.5rem;
  background-color: rgba(97, 221, 99, 0.695);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0.3rem 0.3rem 0.5rem 0.01rem rgb(177, 177, 177);
  box-sizing: border-box;
}

@media (max-width: 500px) {
  .intro h1, h2 {
    font-size: 1rem;
  }

  p{
    font-size: 0.7rem;
  }

  .compass-icon{
    max-width: 1rem;
  }
}

@media (max-width: 300px) {
  h2{
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
  }
  .compass-icon{
    display: none;
  }
}
</style>
