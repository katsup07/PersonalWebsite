<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="`backgroundImage:url(${thumbnail}`"
      ></div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>
<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return `/posts/${this.id}`;
    },
  },
};
</script>

<style scoped>

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: rgba(113, 224, 159, 0.749);
}

@media (min-width: 1px) {
  .post-preview {
    max-width: 400px;
    margin: 10px;
  }
}

@media (max-width: 350px) {
  .post-thumbnail{
    max-height: 6rem;
  }
  .post-preview {
    max-width: 10rem;
    margin: 10px;
  }
}

@media (max-width: 250px) {
  .post-thumbnail{
    max-height: 5rem;
  }
  .post-preview {
    max-width: 8rem;
    margin: 10px;
  }
}
</style>
