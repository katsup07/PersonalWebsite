<template>
  <div>
    <div class="admin-new-post-page" v-if="$store.getters.isAuth">
      <section class="new-post-form">
        <AdminPostForm />
      </section>
    </div>
    <div class="admin-new-post-page" v-if="!$store.getters.isAuth">
      <p>Only administrators may post on this website.</p>
    </div>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/admin/AdminPostForm.vue";
export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
};
</script>

<style scoped>
.admin-new-post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.new-post-form {
  flex-basis: 50%;
}
</style>
