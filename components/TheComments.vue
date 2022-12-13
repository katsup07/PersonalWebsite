<template>
  <section>
    <ul>
      <li v-for="comment of comments" :key="comment.id">
        {{comment.content}}
      </li>
    </ul>
  </section>
</template>
<script>

export default {
  computed: {
    comments() {
      console.log(this.$store.getters.getComments);
      return this.$store.getters.getComments;
    },
  },
};
</script>
