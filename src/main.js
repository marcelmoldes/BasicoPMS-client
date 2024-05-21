import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import clickoutside from "./directives/v-click-outside";

import "./assets/tailwind.css";

createApp(App)
  .use(router)
  .directive("click-outside", clickoutside)
  .mount("#app");
