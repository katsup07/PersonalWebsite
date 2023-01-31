<template>
  <div class="content-container">
    <h1>Language Abilities<img class="language-icon" src="~/static/assets/icons/language-solid-icon.svg"/></h1>
    <section>
      <h2>English - Fluent</h2>
      <ul>
        <li>Native English speaker</li>
        <li>Born and raised in Canada and attended school there from pre-school all the way through university</li>
        <li>Fully literate and able communicate on a wide variety of topics</li>
      </ul>
    </section>
    <section>
      <h2>Japanese - <a href="https://www.jlpt.jp/e/about/levelsummary.html">JLPT N2/N3 Level</a></h2>
      <ul>
        <li><span class="field">Reading - N2</span></li>
        <li><span class="field">Speaking / Listening N2/N3</span> - Able to speak and converse using everyday Japanese. I understand most daily conversations, most anime on Netflix, but the news can be very challenging: some topics I understand and some I don't.</li>
        <li><span class="field">Writing / Typing - N2/N3</span></li>
      </ul>
      <h2>日本語 - <a href="https://www.jlpt.jp/e/about/levelsummary.html">日本語能力試験 N2/N3 レベル</a></h2>
      <ul>
        <li><span class="field">読む力 - N2</span></li>
        <li><span class="field">話す力/ 聞く力 N2/N3</span> - 話す力は日常会話なら出来ます。聞く力は日常会話、アニメ等はだいたい理解できます。でも、テレビのニュースは話題によります。理解できるトピックと理解できないトピックがあります。</li>
        <li><span class="field">書く力 - N2/N3</span></li>
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
h2, p{
  margin: 0;
  margin-bottom:0.3rem;
  font-size: 1.2rem;
}

section{
  margin-bottom: 1rem;
}

section{
  margin-bottom: 1.5rem;
}

img{
  max-width: 7rem;
  border: 0.01rem solid rgb(210, 210, 210);
}

img.language-icon{
  max-width: 3rem;
  margin-left: 0.5rem;
  border: none;
}

li{
  list-style-type: square;
}

.content-container{
margin: 0.5rem;
padding: 0.5rem;
border: 0.1rem double rgb(35, 35, 35);
}

.field{
  font-weight: 600;
}
</style>