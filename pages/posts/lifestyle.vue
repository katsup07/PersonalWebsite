<template>

    <section>
      <div class="content-container">
      <h1>Lifestyle<img class="heart-icon" src="~/static/assets/icons/heart-icon.svg"/></h1>
        <ul>
          <li>Activities: Bicycle riding, working out with weights, and plenty of exercise</li>
          <li>Diet: A balanced diet of mostly natural foods: fruits, vegetables, meat, fish, eggs, nuts etc.</li>
          <li>Sleep: A regular sleep pattern of waking and sleeping around the same time</li>
        </ul>
      </div>
    </section>

</template>
<style scoped>
h1{
  text-align: center;
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
  margin-top: 0;
}
h2{
  margin: 0;
  margin-bottom:0.3rem;
}
ul{
  margin: 0;
  padding-left: 1.3rem;
}
li{
  list-style: square;
  margin-left: 0;
}
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  padding: 2rem 4rem;
  background: url("~/static/assets/images/lifestyle.jpg");
  background-size: cover;
  min-height: 100vh;
}


img{
  max-width: 7rem;
  border: 0.01rem solid rgb(210, 210, 210);
}

  img.heart-icon{
  max-width: 1.8rem;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-left: 0.4rem;
}

.content-container{
margin: 0.5rem;
padding: 1rem;
border: 0.1rem double rgb(35, 35, 35);
background: white;
text-align: left;
}

.field{
  font-weight: 600;
}


</style>