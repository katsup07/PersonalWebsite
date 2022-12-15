<template>
  <div>
    <div class="admin-new-post-page">
      <section class="new-post-form">
        <ContactForm/>
      </section>
    </div>
  </div>
</template>

<script>
import ContactForm from "../../../components/admin/ContactForm.vue";
export default {
  layout: "default",
  components: {
    ContactForm,
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
