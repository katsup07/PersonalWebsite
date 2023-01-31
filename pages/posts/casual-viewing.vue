<template>
  <div class="content-container">
    <h1>Favorite Youtube Channels<img class="youtube-icon" src="~/static/assets/icons/youtube-icon.svg"/></h1>
    <section>
      <h2>Science and Engineering</h2>
      <img src="~/static/assets/images/microscope.jpg" alt="microscope looking at leaf"/>
      <p><a href="https://www.youtube.com/watch?v=OxGsU8oIWjY">Veritasium</a> - Covers various science, math, tech, and engineering problems and stories, such as "Is Glass a Liquid?" and the "Infinite Hotel".</p>
      <p><a href="https://www.youtube.com/watch?v=1vq_h4myH1E">Vsauce / Ding</a> - These channels explain about various scientific and philosophical topics, such as "What does it mean for something to be random?" or "How to create a self starting siphon"</p>
      <p><a href="https://www.youtube.com/watch?v=wI-qAxKJoSU">EngineerGuy</a> - A chemical engineer and professor, William Hammack, details the thought process and history behind various engineering achievements, like how the aluminum beverage came to be, or the shape-memory-effect and superelasticity of nitinol.</p>
    </section>
    <hr class="dividing-line">
    <section>
      <h2>Health</h2>
      <img src="~/static/assets/images/health.jpg" alt="food on table from top down view"/>
      <p><a href="https://www.youtube.com/watch?v=cPyFIvCvh8U">Dr Berg </a> - A doctor and best selling author shares information about foods and why the various nutrients are necessary and the functions they serve in our bodies.
      </p>
      <p><a href="https://www.youtube.com/@chubbyemu/videos">Chubbyemu</a> - A doctor who tells stories of real life extreme medical cases and the science used to treat the patients conditions.</p>
    </section>
    <hr class="dividing-line">
    <section>
    <h2>Various Topics</h2>
    <img src="~/static/assets/images/post-it.jpg" alt="blue glowing keyboard in the dark"/>
      <p><a href="https://www.youtube.com/@TED/videos">Ted Talks</a> / <a href="https://www.youtube.com/@TEDxTalks">Tedx Talks</a> - Motivational speeches about ways to solve problems, new ideas, and how people can enrich their lives and help others.</p>
    </section>
    <hr class="dividing-line">
    <section>
    <h2>Computers and Technology</h2>
    <img src="~/static/assets/images/tech.jpg" alt="blue glowing keyboard in the dark"/>
      <p><a href="https://www.youtube.com/@LinusTechTips/videos"> Linus Tech Tips</a> - Daily computer and technology related tips.</p>
      <p><a href="https://www.youtube.com/@Hardwareunboxed/videos">Hardware Unboxed</a></p>
      <p><a href="https://www.youtube.com/@Techquickie/videos">Tech Quickie</a></p>
      <p><a href="https://www.youtube.com/@techlinked">TechLinked</a></p>
      <p><a href="https://www.youtube.com/@techyescity/videos">Tech Yes City</a></p>
      <p><a href="https://www.youtube.com/@LGR/videos">LGR</a> - Videos about older computer technologies.</p>
    </section>
    <hr class="dividing-line">
    <section>
    <h2>Video Games</h2>
    <img src="~/static/assets/images/video-games2.jpg" alt="video games scoreboard"/>
      <p><a href="https://www.youtube.com/@gaminghistorian/videos">Gaming Historian</a> - Documentaries covering the history of video games, such as the "The Story of Super Mario Bros 3".</p>
      <p><a href="https://www.youtube.com/@NoclipDocs/videos">Noclip</a> - In depth video game documentaries, by Danny O'Dwyer, who formerly worked at Gamespot News.</p>
    </section>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 1.9rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}
p, h2{
  margin: 0rem;
  margin-bottom:0.3rem;
}
h2{
   font-size: 1.3rem;
}
section{
  margin-bottom: 1.5rem;
}

img{
  max-width: 7rem;
  border: 0.01rem solid rgb(210, 210, 210);
}

img.youtube-icon{
  max-width: 3rem;
  margin-left: 0.5rem;
  border: none;
}

.content-container{
 margin: 0.5rem;
 padding: 0.5rem;
 border: 0.1rem double rgb(35, 35, 35);
}

.dividing-line{

  margin-bottom: 1.7rem;
}

</style>