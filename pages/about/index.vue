<template>
  <div class="container">
    <div class="about-page">
      <h1 class="about-me">About Me</h1>   <img src="~static/assets/images/smile.jpg" alt="a picture of me"/>
      <ul class="personal-info">
        <li><span class="field">Name:</span> Brett</li>
        <li><span class="field">Nationality:</span> Canadian</li>
        <li><span class="field">Japanese Residence Status:</span> Permanent Resident</li>
        <li><span class="field">City:</span> Kawasaki Japan</li>
        <div class="note">(Partial details are listed above for privacy reasons. Full details can be provided on request.)</div>
      </ul>
      <h2>Motivation</h2>
       <p>I am a mathematics degree holder currently seeking Programming / Front End Web Development work. I have 3 years experience(~3000 hours) building programs as a hobby / university student. I am highly motivated, a quick learner, and eager to develop new skills.</p>
      <h2>Background</h2>
      <p>I grew up in Canada and lived in Toronto until finishing highschool. I then moved to Vancouver and attended the <a href="https://www.ubc.ca/">University of British Columbia</a>, where I completed undergraduate studies in mathematics. Since then, I have been living and working as a teacher/curriculum-coordinator in Japan for the past 13 years.</p>
      <h2 class="category">Interests</h2>
        <p>I like watching movies, cooking, puzzles and problem solving of all forms, tinkering with computer hardware and software, building and creating things, reading about health/psychology/science/tech/engineering, watching youtube, playing video games, and bicycle riding.</p>
      <h2 class="category">Currently Learning</h2>
      <ul>
        <li><a href="https://www.jlpt.jp/e/about/levelsummary.html">N1/N2</a> level Japanese</li>
        <li>Programming - <a href="https://docs.angularjs.org/guide/introduction/">angular.js</a>, <a href="https://nodejs.org/en/about/">Node.js</a>, <a href="https://www.mysql.com/">Databases</a>, <a href="https://www.npmjs.com/package/sass">SASS</a>, <a href="https://medium.com/geekculture/23-java-design-patterns-c1ff40faa5cd">design patterns</a>, <a href="https://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118">best practices</a> and more</li>
      </ul>
      <h2>Github</h2>
      <ul>
        <li>Here is my <a href="https://github.com/katsup07">github</a> account with all the projects I've been working on over the past year</li>
        <li>The ReadMe instructions have all the details for running the programs</li> 
      </ul>
       <h2>Personality / Mindset</h2>
      <ul>
        <li>Easily approachable, strong interpersonal skills, and able to work together as part of a diverse team</li>
        <li>Open to change, highly adaptable, and able to remain calm and relaxed, even in tense situations</li>
        <li>Self motivated, highly focused, and capable of working for long hours on a task or switching between various tasks at a time</li>
        <li>Able to learn from others, learn from mistakes, and seek out solutions to problems</li>
        <li>Eager to take on new challenges and grow</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
img{
  max-width: 5rem;
  border-radius: 5rem;
  border: 0.01rem solid rgb(215, 215, 215);
}
.personal-info{
  padding-left: 0;
}
.personal-info li{
  list-style:none;
}
ul{
  margin: 0;
}
li{
  list-style: square;
}
h1{
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}
p, h1{
  margin:0;
}
h2{
  font-size: 1.2rem;
  margin-bottom: 0;
}

.field{
  font-weight: 600;
}
.note{
  font-size: 0.5rem;
  font-style: italic;
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 0.1rem double rgb(35, 35, 35);
}

.about-page, h1{
  text-align: left;
}
.category{
  font-weight: 700;
}

@media (max-width: 768px) {
  .container{
    display: flex;
    flex-direction: column;
  }
  p, li {
    font-size: 0.8rem;
  }
  h1.about-me{
    font-size: 1.2rem;
  }
  h2{
    margin:0;
    padding:0;
    font-size: 1rem;
  }
  img{
    max-height: 4rem;
  }
}
</style>
