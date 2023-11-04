<template>
  <section>
    <div class="info-container">
      <h1>
        Portfolio<img
          class="gear-icon"
          src="~/static/assets/icons/gear-solid-icon.svg"
        />
      </h1>
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
          <TableRow
            v-for="row in tableRows"
            :key="row.github"
            :pageLink="row.pageLink"
            :appTitle="row.appTitle"
            :date="row.date"
            :gitHubLink="row.gitHubLink"
            :note="row.note"
          />
        </tbody>
      </table>
        <p class="note">
          ***<span class="bold">Note:</span> More React, Vue, Next.js, and Nuxt.js projects can be
          found on my <a href="https://github.com/katsup07">GitHub account</a>.***
        </p>
    </div>
  </section>
</template>
<script>
import TableRow from "../../components/TableRow";
import AppCard from "../../components/UI/AppCard";

export default {
  components: {
    TableRow,
    AppCard,
  },
  data() {
    return {
      tableRows: [
        {
          pageLink: "https://react-games-swart.vercel.app/",
          appTitle: "React Games",
          date: "May 2023",
          gitHubLink: "https://github.com/katsup07/react-games",
          note: "Created with React, React Query, chakra, zustand, Typescript, and Vercel.",
        },
        {
          pageLink: "https://github.com/katsup07/gamer",
          appTitle: "Online Game Store REST API(GitHub only)",
          date: "March 2023",
          gitHubLink: "https://github.com/katsup07/gamer",
          note: "Created with Node.js, Express.js, and MongoDB.",
        },
        {
          pageLink: "https://next-js-weblog.vercel.app/",
          appTitle: "Next.js Weblog",
          date: "February 2023",
          gitHubLink: "https://github.com/katsup07/NextJS-Blog",
          note: "Created with Next.js, MongoDB, and Vercel.",
        },
        {
          pageLink: "https://worksplore.web.app/",
          appTitle: "This Webpage",
          date: "January 2023",
          gitHubLink: "https://github.com/katsup07/PersonalWebsite",
          note: "Made with Nuxt.js and Firebase.",
        },
        {
          pageLink: "https://retrostation-9a405.web.app/",
          appTitle: "Retro Station",
          date: "December 2022",
          gitHubLink: "https://github.com/katsup07/Retro-Station",
          note: "Made with Next.js and Redux.",
        },
        {
          pageLink: "https://find-a-coach-f01cc.web.app/coaches",
          appTitle: "Find a Coach",
          date: "October 2022",
          gitHubLink: "https://github.com/katsup07/find-a-coach",
          note: "Made with Vue.js and Firebase.",
        },
        {
          pageLink: "https://katsup07.github.io/clock/",
          appTitle: "Analogue Clock",
          date: "May 2022",
          gitHubLink: "https://github.com/katsup07/clock",
          note: "Keeps track of time.",
        },
        {
          pageLink: "https://katsup07.github.io/checkers/",
          appTitle: "Checkers",
          date: "May 2022",
          gitHubLink: "https://github.com/katsup07/checkers",
          note: "Click a checkers piece and then an open blue square to move.",
        },
        {
          pageLink: "https://katsup07.github.io/etch-a-sketch/",
          appTitle: "Etch a Sketch",
          date: "April 2022",
          gitHubLink: "https://github.com/katsup07/etch-a-sketch",
          note: "Use the arrow keys to draw.",
        },
        {
          pageLink: "https://katsup07.github.io/GitHub-User-Info-Search/",
          appTitle: "GitHub User-Info-Search",
          date: "April 2022",
          gitHubLink: "https://github.com/katsup07/GitHub-User-Info-Search",
          note: "Displays publicly available data about users.",
        },
        {
          pageLink: "https://katsup07.github.io/Speech-to-Text/",
          appTitle: "Speech to Text",
          date: "April 2022",
          gitHubLink: "https://github.com/katsup07/Speech-to-Text",
          note: "Uses chrome.",
        },
        {
          pageLink: "https://katsup07.github.io/Adventure-World-Cards/",
          appTitle: "Adventure World Cards",
          date: "April 2022",
          gitHubLink: "https://github.com/katsup07/Adventure-World-Cards",
          note: "Brings pictures on and off the screen.",
        },
        {
          pageLink: "https://katsup07.github.io/Dad-Jokes/",
          appTitle: "Dad Jokes",
          date: "April 2022",
          gitHubLink: "https://github.com/katsup07/Dad-Jokes",
          note: "Fetches from https://icanhazdadjoke.com/api.",
        },
        {
          pageLink: "https://katsup07.github.io/tic-tac-toe/",
          appTitle: "Tic Tac Toe",
          date: "April 2022",
          gitHubLink: "https://github.com/katsup07/tic-tac-toe",
          note: "Play against the computer.",
        },
        {
          pageLink: "https://katsup07.github.io/Rainbow-Coloring/",
          appTitle: "Finger Painting",
          date: "March 2022",
          gitHubLink: "https://github.com/katsup07/Rainbow-Coloring",
          note: "Left click and hold to draw.",
        },
        {
          pageLink: "https://katsup07.github.io/calculator/",
          appTitle: "Calculator",
          date: "March 2022",
          gitHubLink: "https://github.com/katsup07/calculator",
          note: "Performs basic calculations.",
        },
        {
          pageLink: "https://katsup07.github.io/Swimming-Fish/",
          appTitle: "Swimming Fish",
          date: "March 2022",
          gitHubLink: "https://github.com/katsup07/Swimming-Fish",
          note: "Use the arrow keys to make the fish swim.",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 0.7rem;
  background: url("~/static/assets/images/stationary.jpg");
  background-size: cover;
  min-height: 100vh;
}

h1 {
  margin: 0;
  text-align: center;
  font-size: 1.75rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}

img.gear-icon {
  max-width: 2rem;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-left: 0.4rem;
}

table {
  margin: 0 auto;
}

.categories th {
  font-size: 1rem;
  font-weight: 900;
  background-color: rgba(113, 224, 159, 0.726);
  border-radius: 0.2rem;
}
td,
th {
  padding: 0.7rem;
  font-size: 0.8rem;
}

tr:nth-child(even),
tr:nth-child(even) td,
tr:nth-child(even) th {
  background-color: rgb(222, 222, 222);
  border-radius: 0.2rem;
}

.info-container {
  box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
  margin: 0.5rem;
  padding: 0.5rem;
  border: 0.1rem double rgb(35, 35, 35);
  background-color: white;
  min-width: 40%;
  padding: 1rem;
}

.bold{
  font-weight: 900;
}

.note{
  font-size: 0.9rem; 
}

@media screen and (max-width: 800px) {
  .categories th,
  td,
  th, p {
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    padding: 0;
    margin: 0;
  }
}
</style>
