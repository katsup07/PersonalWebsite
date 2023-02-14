<template>
  
    <section>
     <div class="info-container">
        <h1>Future Dreams<img class="cloud-moon-icon" src="~/static/assets/icons/cloud-moon-icon.svg"/></h1>
        <p>Over the past 13 years, I have enjoyed teaching students and learning what it means to be a teacher. However, I feel it is time for new challenges and to work in a different field. I enjoy designing and creating things, and love mathematical/ logical problem solving, so I feel it would be good fit for me to work as a programmer. I hope to learn more about the thought processes and various methodologies for planning, building, and maintaining programs.</p>   
      </div>
    </section>
  
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 2rem 4rem;
  background: url("~/static/assets/images/clouds.jpg");
  background-size: cover;
  min-height: 100vh;
}


h1 {
  margin: 0;
  font-weight: 600;
  text-align: center;
  font-size: 1.9rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}

  img.cloud-moon-icon{
  max-width: 2.7rem;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-left: 0.4rem;
}

.info-container {
  box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
  margin: 0.5rem;
  padding: 1rem;
  border: 0.1rem double rgb(35, 35, 35);
  background-color: white;
  min-width: 40%;
  text-align: left;
}

@media screen and (max-width: 800px){
     
   h1{
    font-size: 1.3rem;
   }
  }
</style>
