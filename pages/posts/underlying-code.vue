<template>
  <section>
    <div class="info-container">
      <h1>User Interface<img class="gear-icon" src="~/static/assets/icons/gear-solid-icon.svg"/></h1>
      <p>This site was made using <a href="https://nuxtjs.org/">Nuxt.js</a>. A repository with the code is on my Github account<a href="https://github.com/katsup07/PersonalWebsite"> here</a>.</p>
    </div>
  </section>
</template>
<style scoped>
section{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 0.7rem;
  background: url("~/static/assets/images/stationary.jpg");
  background-size: cover;
  height: 100vh;
    }
  

  h1{
    margin: 0;
   text-align: center;
   font-size: 1.75rem;
   text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
  }

   img.gear-icon{
  max-width: 2rem;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-left: 0.4rem;
}

  .info-container{
    box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
    margin: 0.5rem;
    padding: 0.5rem;
    border: 0.1rem double rgb(35, 35, 35);
    background-color: white;
    min-width: 40%;
    padding: 1rem;
  }
</style>