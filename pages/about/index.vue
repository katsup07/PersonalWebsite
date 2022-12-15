<template>
  <div class="container">
    <div class="about-page">
      <h1>About Me</h1>   <img src="~static/assets/images/cable-car2.jpg" alt="a picture of me"/>
      <p>I grew up in Canada and lived in Toronto until finishing highschool. I then moved to Vancouver and attended the <a href="https://www.ubc.ca/">University of British Columbia</a>, where I completed undergraduate studies in mathematics. Since then, I have been living and working as a teacher/coordinator in Japan for the past 13 years.</p>
      <h2 class="category">Interests</h2>
      <p>Watching movies, cooking, puzzles and problem solving of all forms, tinkering with computer hardware and software, building and creating things, reading about health/psychology/science/tech/engineering, watching youtube, playing video games, and bicycle riding.</p>
      <h2 class="category">Currently Learning</h2>
      <p><a href="https://www.jlpt.jp/e/about/levelsummary.html">N1/N2</a> level Japanese, and programming - <a href="https://docs.angularjs.org/guide/introduction/">angular.js</a>, <a href="https://www.typescriptlang.org/">typescript</a>, <a href="https://nodejs.org/en/about/">Node.js</a>, <a href="https://www.mysql.com/">MySql</a>, <a href="https://www.npmjs.com/package/sass">SASS</a>, <a href="https://medium.com/geekculture/23-java-design-patterns-c1ff40faa5cd">design patterns</a> etc.</p>
      <h2>Github</h2>
      <p>My <a href="https://github.com/katsup07">github</a> account can be found here along with the projects I've been working on over the past year. The ReadMe instructions have all the details for installing the dependencies and running the scripts. The API keys are included, which is not a good practice, but to make it easy for anyone to view and try out the entire apps without having to configure much, I've included them there for the time being. Please don't be evil with the API keys. Of course, feel free to test out the apps, find bugs, create and delete data, users, etc. They're all works in progress.</p>
      <h2>Personality</h2>
      <p>I enjoy working together in teams and independently. I'm open to change, highly adaptable, and am able to remain calm and relaxed, even in tense situations. I'm self motivated, highly focused, and can work for long hours on a task or switch between various tasks at a time. I am always learning from others and am ready to take on new challenges. Difficult challenges tend to motivate me even more. </p>
      <h2>Strengths, and Weaknesses</h2>
      <p>My main strength is probably my soft skills and ability to understand and work together with others effectively. I'm good at helping create a smooth and pleasant work environment. My weakness is that I sometimes work too hard on tasks. I'm learning to be more efficient and productive and swiftly complete tasks. I appreciate feedback and am always ready to learn and improve.</p>

    </div>
  </div>
</template>

<style scoped>
img{
  max-width: 5rem;
  border-radius: 5rem;
  border: 0.01rem solid rgb(215, 215, 215);
}
h1{
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}
p, h1{
  margin:0;
  margin-bottom: 0.1rem;
}
h2{
  margin-bottom: 0;
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
  p {
    font-size: 0.8rem;
  }
  h1, h2{
    margin:0;
    padding:0;
    font-size: 1rem;
  }
  img{
    max-height: 4rem;
  }
}
</style>
