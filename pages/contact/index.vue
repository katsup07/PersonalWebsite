<template>
  <div>
    <section>
      <div class="contact-info-container">
        <h1>Contact</h1>
        <div class="field"><span class="field-title">Name</span>: Brett</div>
        <div class="field"><span class="field-title">Email</span>: abc@domain.com</div>
        <div class="field"><span class="field-title">Phone</span>: 123-4567</div>
        <p>Alternatively, you can also send me a message directly here via the following form.</p>
          <AppButton @click="$router.push('/admin/contact-form')"
            >Send Message</AppButton
          >
       
      </div>
    </section>
  </div>
</template>
<script>
import AppButton from '../../components/UI/AppButton.vue';

export default({
  components:{
  AppButton,
},
})

</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  padding: 0.7rem;
  background: url("~/static/assets/images/contact.jpg");
   background-size: cover;
  height: 100vh;
}

img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.2rem;
  border: 0.1px solid rgb(162, 162, 162);
}

h1 {
  margin: 0;
  font-weight: 600;
  font-size: 1.6rem;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.743);
}

.contact-info-container {
  box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
  border-radius: 0.3rem;
  background-color: white;
  min-width: 40%;
  padding: 1rem;
}
.field-title {
  font-weight: 600;
}

.field {
  font-size: 1rem;
}
</style>
