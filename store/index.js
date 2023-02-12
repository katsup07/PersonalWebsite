import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

const posts =[
  {
    id: "portfolio",
    thumbnail: "./assets/images/about-site.jpg",
    title: "Portfolio",
    previewText: "Past and current projects",
  },
  {
    id: "work-history",
    thumbnail: "./assets/images/history.jpg",
    title: "Work History",
    previewText: "Previous and current duties",
  },
  {
    id: "education",
    thumbnail: "./assets/images/coding.jpg",
    title: "Education History",
    previewText: "Formal learning",
  },
  {
    id: "language-abilities",
    thumbnail: "./assets/images/language.jpg",
    title: "Language Levels",
    previewText: "English / 日本語",
  },
  {
    id: "technologies",
    thumbnail: "./assets/images/lights-on-book.jpg",
    title: "Technologies",
    previewText: "Programming tools I've used",
  },
  {
    id: "casual-viewing",
    thumbnail: "./assets/images/youtube.jpg",
    title: "Favorite Channels",
    previewText: "Insightful Youtube videos",
  },
  {
    id: "inspiration",
    thumbnail: "./assets/images/pc.jpg",
    title: "Inspiration",
    previewText: "Life in pictures from pexels.com",
  },
  {
    id: "dreams",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/dreamy.jpg",
    title: "Future Dreams",
    previewText: "Ambitions and goals",
  },
  {
    id: "lifestyle",
    thumbnail: "./assets/images/lifestyle2.jpg",
    title: "Lifestyle",
    previewText: "Diet and exercise",
  },
];

const tempComments = [{author: 'Test', title: 'Temp comment', email: "tester@test.com", content: 'Testing, testing 1,2,3. Either there is a problem with firebase currently or there are no actual comments to display.'}];


export default () =>
  new Vuex.Store({
    state: () => ({
      webToken: null, // provides authorization to use admin features when populated with token
      posts: posts || [], // topic posts from above in this file
      comments: tempComments || [], // comments from firebase backend
    }),
    getters,
    mutations,
    actions,
  });

