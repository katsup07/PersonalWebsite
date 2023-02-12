<template>
  <section>
    <div class="info-container">
      <h1>Portfolio<img class="gear-icon" src="~/static/assets/icons/gear-solid-icon.svg"/></h1>
      <table class="table">
  <thead>
    <tr class="categories">
      <th scope="col">Application</th>
      <th scope="col">Date</th>
      <th scope="col">GitHub Repository</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="https://worksplore.web.app/">This Webpage</a></th>
      <td>January 2023</td>
      <td><a href="https://github.com/katsup07/PersonalWebsite">code</a></td>
      <td>Made with Nuxt.js and Firebase.</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://find-a-coach-f01cc.web.app/coaches">Find a Coach</a></th>
      <td>October 2022</td>
      <td><a href="https://github.com/katsup07/find-a-coach">code</a></td>
      <td>Made with Vue.js and Firebase.</td>
    </tr>
    <tr>
      <th><a href="https://katsup07.github.io/clock/">Analogue Clock</a></th>
      <td>May 2021</td>
      <td><a href="https://github.com/katsup07/clock">code</a></td>
      <td>Use the arrow keys to draw.</td>
    </tr>
    <tr>
      <th><a href="https://katsup07.github.io/checkers/">Checkers</a></th>
      <td>May 2021</td>
      <td><a href="https://github.com/katsup07/checkers">code</a></td>
      <td>Unfinished, but the basic gameplay works.</td>
    </tr>
    <tr>
      <th><a href="https://katsup07.github.io/etch-a-sketch/">Etch a Sketch</a></th>
      <td>April 2021</td>
      <td><a href="https://github.com/katsup07/etch-a-sketch">code</a></td>
      <td>Use the arrow keys to draw.</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://katsup07.github.io/GitHub-User-Info-Search/">GitHub User-Info-Search</a></th>
      <td>April 2021</td>
      <td><a href="https://github.com/katsup07/GitHub-User-Info-Search">code</a></td>
      <td>Displays publicly available data about users.</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://katsup07.github.io/Speech-to-Text/">Speech to Text</a></th>
      <td>April 2021</td>
      <td><a href="https://github.com/katsup07/Speech-to-Text">code</a></td>
      <td>Uses chrome.</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://katsup07.github.io/Adventure-World-Cards/">Adventure World Cards</a></th>
      <td>April 2021</td>
      <td><a href="https://github.com/katsup07/Adventure-World-Cards">code</a></td>
      <td>Brings pictures on and off the screen.</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://katsup07.github.io/Dad-Jokes/">Dad Jokes</a></th>
      <td>April 2021</td>
      <td><a href="https://github.com/katsup07/Dad-Jokes">code</a></td>
      <td>Fetches from https://icanhazdadjoke.com/api.</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://katsup07.github.io/tic-tac-toe/">Tic Tac Toe</a></th>
      <td>April 2021</td>
      <td><a href="https://github.com/katsup07/tic-tac-toe">code</a></td>
      <td>Play against the computer.</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://katsup07.github.io/Rainbow-Coloring/">Rainbow Coloring</a></th>
      <td>March 2021</td>
      <td><a href="https://github.com/katsup07/Rainbow-Coloring">code</a></td>
      <td>Left click and hold to draw.</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://katsup07.github.io/calculator/">Calculator</a></th>
      <td>March 2021</td>
      <td><a href="https://github.com/katsup07/calculator">code</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="https://katsup07.github.io/Swimming-Fish/">Swimming Fish</a></th>
      <td>March 2021</td>
      <td><a href="https://github.com/katsup07/Swimming-Fish">code</a></td>
      <td>Use the arrow keys to make the fish swim.</td>
    </tr>
  </tbody>
</table>
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
  min-height: 100vh;
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

table{
  margin: 0 auto;
}

hr{
  width: 100%;
}
.categories th{
  font-size: 1rem;
  font-weight: 900;
  background-color:  rgba(113, 224, 159, 0.726);
  border-radius: 0.2rem;
}
td, th{
  padding: 0.7rem;
  font-size: 0.8rem;
}

tr:nth-child(even), tr:nth-child(even) td, tr:nth-child(even) th{
  background-color: rgb(222, 222, 222);
  border-radius: 0.2rem;
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