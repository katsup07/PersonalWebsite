<template>
  <section>
    <div class="info-container">
      <h1>User Interface</h1>
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
    font-weight: 600;
    font-size: 1.6rem;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.743);
  }

  .info-container{
    box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
    border-radius: 0.3rem;
    background-color: white;
    min-width: 40%;
    padding: 1rem;
  }
</style>
</style>