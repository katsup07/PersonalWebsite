<template>
  <div>
    <div class="card-container">
      <slot></slot>
    </div>
  </div>

</template>
<style scoped>
  h1{
    margin: 0;
    font-weight: 600;
    font-size: 1.6rem;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.743);
  }

  .card-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem auto;
   padding: 0.7rem;
 /*  background: url(url); */
    background-size: cover;
    box-shadow: 2px 2px 4px 2px rgb(227, 227, 227);
    border-radius: 0.3rem;
    border: 1px solid rgb(214, 214, 214);
    background-color: white;
    max-width: 50%;
    padding: 1rem;
  }
  @media screen and (max-width: 800px) {
   p {
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    padding: 0;
    margin: 0;
  }
}
</style>
</style>