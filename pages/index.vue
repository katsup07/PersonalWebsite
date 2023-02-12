<template>
  <div class="home-page">
    <section class="intro">
      <h1>Explore and Discover</h1>
    </section>
    <section class="mission-statement">
      <div class="nav-header-and-compass">
        <h2>Site Navigation</h2>
        <img
          class="compass-icon"
          src="~static/assets/icons/compass-regular.svg"
          alt="compass icon"
        />
      </div>
      <p>
        This site contains information about my background and personal
        interests. The AboutMe link above in the navigation bar provides a
        general overview, while the topics section has further details. If you
        have any questions, please feel free to contact me. Thank-you for
        visiting!
      </p>
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
  layout: "default",
  components: {
    PostPreview,
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>

<style scoped>
* {
  color: rgb(16, 19, 32);
}

h2,
p {
  margin: 0;
  padding: 0.3rem;
}
h2 {
  font-size: 1.3rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}

p {
  font-size: 0.85rem;
}

.nav-header-and-compass {
  display: flex;
  background: rgba(113, 224, 159, 0.726);
  border-bottom: 1px solid rgb(226, 226, 226);
}
.compass-icon {
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

.mission-statement {
  margin: 1rem;
  box-shadow: 0.1rem 0.1rem 0.2rem 0.01rem rgb(211, 211, 211);
  border: 0.1px solid rgb(226, 226, 226);
  border-radius: 0rem;
}

.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("/assets/images/smart-phone.jpg");
  background-position: center;
  background-size: cover;
  margin: 0;
}

.intro h1 {
  text-align: center;
  font-weight: 900;
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  color: rgba(255, 255, 255, 0.827);
  text-shadow: 1px 1px 1px rgb(111, 111, 111);
  font-size: 3rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
}

@media (max-width: 500px) {
  .intro {
    height: 200px;
  }
  .intro h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.7rem;
  }

  .compass-icon {
    max-width: 1rem;
  }
}

@media (max-width: 350px) {
  .intro h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
  }
  .compass-icon {
    display: none;
  }
}
</style>
