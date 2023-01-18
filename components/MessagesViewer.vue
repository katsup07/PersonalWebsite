<template>
  <section>
    <h1>Messages</h1>
    <ul>
        <li v-for="comment of comments" :key="comment.id">
          <div>
            <AppCard>
              <div><span class="field">Title:</span> {{ comment.title }}</div>
              <div><span class="field">Username:</span> {{ comment.author }}</div>
              <div><span class="field">Email:</span> {{ comment.email }}</div>
              <div><span class="field">Content:</span> {{ comment.content }}</div>
             </AppCard>
          </div>
        </li>
    </ul>
  </section>
</template>
<script>
import { getCommentsFromDatabase } from "../util/helpers.js";
import AppCard from "./UI/AppCard.vue";

export default {
  components: {
    AppCard,
  },
  computed: {
    comments() {
      return this.$store.getters.getComments;
    },
  },
  async beforeCreate() {
    const messages = await getCommentsFromDatabase();
    this.$store.dispatch("setMessages", messages);
  },
};
</script>
<style scoped>
section h1{
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 0;
}
ul {
  list-style: none;
}

li {
  margin-bottom: 1rem;
}
.field{
  font-weight: 600;
}
</style>
