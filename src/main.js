import { createApp } from "vue";
import "../index.css";
import App from "./App.vue";
import router from "./router";

import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import ChatBox from "./components/ChatBox.vue";
import Footer from "./components/Footer.vue";
import Joke from "./components/Joke.vue";

const app = createApp(App)
  .use(router)
  .component("Nav", Nav)
  .component("Hero", Hero)
  .component("ChatBox", ChatBox)
  .component("Footer", Footer)
  .component("Joke", Joke)
  .mount("#app");
