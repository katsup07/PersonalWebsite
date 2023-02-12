<template>
  <section>
    <div class="info-container">
      <h1>Technologies<img class="microchip-icon" src="~/static/assets/icons/microchip-solid-icon.svg"/></h1>
      <p>Technologies I have used when building applications.</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>React.js</li>
  <li>Redux</li>
  <li>Next.js</li>
  <li>Vue.js</li>
  <li>Vuex</li>
  <li>Nuxt.js</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>EJS</li>
  <li>Typescript</li>
  <li>Java</li>
  <br>
  <li>Command Line Interfaces</li>
  <li>Git</li>
  <li>Github</li>
  <li>MongoDB</li>
  <li>Firebase</li>
  <li>Jest / Vitest</li>
  <li>NPM</li>
  <br>
  <li>Windows</li>
  <li>Linux</li>
  <li>IOS</li>
  <br>
  <li>VSCode</li>
  <li>Intellij</li>
  <br>
  <li>Chrome / Firefox and their dev tools</li>
  <li>G-suite - google docs, sheets, slides, drive etc.</li>
  <li>Gimp</li>
  <li>Movie Maker</li> 
  <li>iMovie</li>
  <li>OBS</li>
</ul>
<h2 class="learning">Currently Learning</h2>
<li>mySql</li>
<li>Angular</li>
<li>SASS</li>
<p>
</p>
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
    }
  

  h1{
    margin: 0;
   text-align: center;
   font-size: 1.75rem;
   text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
  }

  h2{
    margin:0.3rem;
  }

  img.microchip-icon{
  max-width: 2rem;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-left: 0.4rem;
}

p{
  margin-top: 0.4rem;
  margin-bottom: 0.2rem;
}
  ul{
    padding: 0;
    margin-top: 0rem;
  }
  li{
    list-style: none;
    font-weight: 600;
  }

  .info-container{
    box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
    padding: 0.5rem;
    border: 0.1rem double rgb(35, 35, 35);
    background-color: white;
    min-width: 40%;
    padding: 1rem;
  }

  .learning{
    color: rgb(255, 0, 64);
  }
</style>