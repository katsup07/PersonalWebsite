import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

const posts =[
  {
    id: "work-history",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/history.jpg",
    title: "Work History",
    previewText: "Previous and current duties",
  },
  {
    id: "education",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/coding.jpg",
    title: "Education History",
    previewText: "Formal learning",
  },
  {
    id: "language-abilities",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/language.jpg",
    title: "Language Levels",
    previewText: "English / 日本語",
  },
  {
    id: "technologies",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/lights-on-book.jpg",
    title: "Technologies",
    previewText: "Programming tools I've used",
  },
  {
    id: "underlying-code",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/about-site.jpg",
    title: "User Interface",
    previewText: "Underlying code for this site",
  },
  {
    id: "casual-viewing",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/youtube.jpg",
    title: "Favorite Channels",
    previewText: "Insightful Youtube videos",
  },
  {
    id: "inspiration",
    isAdmin: "isAdmin",
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
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/lifestyle2.jpg",
    title: "Lifestyle",
    previewText: "Diet and exercise",
  },
];

const tempComments = [{author: 'Luke', title: 'Temp comment', email: "luke@bear.com", content: 'Testing, testing 1,2,3.'}];


export default () =>
  new Vuex.Store({
    state: () => ({
      // isAuth: true,
      webToken: null,
      posts: posts || [],
      comments: tempComments || [],
    }),
    getters,
    mutations,
    actions,
  });

