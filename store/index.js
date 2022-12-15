import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

const Posts =[
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
    id: "Language-abilities",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/language.jpg",
    title: "Language Levels",
    previewText: "English and Japanese",
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
    previewText: "Life in pictures",
  },
  {
    id: "dreams",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/dreamy.jpg",
    title: "Dreams",
    previewText: "Future aspirations and ambitions",
  },
  {
    id: "lifestyle",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/lifestyle2.jpg",
    title: "Lifestyle",
    previewText: "Diet and exercise",
  },
];

const tempComments = [{author: 'Luke', title: 'Test', email: "luke@bear.com", content: 'Testing testing 1,2,3.'}];


export default () =>
  new Vuex.Store({
    state: () => ({
      // isAuth: true,
      webToken: true,
      posts: Posts || [],
      comments: tempComments || [],
    }),
    getters,
    mutations,
    actions,
  });

