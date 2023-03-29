<template>
  <div class="content-container">
    <h1>Education History <img class="school-icon" src="~/static/assets/icons/school-icon.svg"/></h1>
    <section>
      <h2>Mathematics Degree</h2>
      <ul>
        <li><span class="field">Type:</span> 4 year bachelors degree
        <li><span class="field">Standing:</span> First Class with an overall A- average</li>
        <li><span class="field">Courses</span>: Calculus(many), differential equations, partial differential equations, linear algebra, logic and proofs, discrete mathematics, probability, complex variables, linear programming, applied complex analysis, coding theory and cryptography, and euclidean geometry. Various science, programming, Chinese, Japanese, and English courses were also part of the degree</li>
        <li><span class="field">Location:</span> <a href="https://www.ubc.ca/">The University of British Columbia</a> in Vancouver Canada</li>
        <li><span class="field">Department: </span><a href="https://www.math.ubc.ca/">Mathematics</a></li>
        <li><span class="field">Membership: </span><a href="https://goldenkey.org/about/">Golden Key Honours Society</a></li>
      </ul>
      </section>
      <section>
      <h2>Programming</h2>
      <ul>
        <li><a href="https://www.cs.ubc.ca/~tmm/courses/cpsc111-06-spr/courseinfo.html">Computer Science 111</a> - Introduction to Computation(Java)</li>
        <li><a href="https://www.cs.ubc.ca/~gabrielm/211/courseInformation.html">Computer Science 211</a> - Introduction to Software Development(Java)</li>
        <li><a href="https://codewithmosh.com/">Code with Mosh</a> - Data Structures, design patterns, clean code writing, refactoring, git, and also an introduction to test driven development</li>
        <li><a href="https://www.theodinproject.com/">The Odin Project -</a> A free, full stack, project based learning curriculum that is supported by an open source community</li>
        <li><a href="https://www.udemy.com/">Udemy</a> - Various courses about Javascript and its frameworks, such as React, Vue, Angular, Next.js, Nuxt.js, and Node.js</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
  font-size: 1.9rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}
h2{
  margin: 0;
  margin-bottom:0.3rem;
   font-size: 1.3rem;
}
ul{
  margin: 0;
  padding-left: 1.3rem;
}
li{
  list-style: square;
  margin-left: 0;
}
section{
  margin-bottom: 1rem;
}


img{
  max-width: 7rem;
}

.content-container{
margin: 0.5rem;
padding: 0.5rem;
border: 0.1rem double rgb(35, 35, 35);
}

.school-icon{
  max-width: 2.3rem;
  border: none;
}

.field{
  font-weight: 600;
}


</style>