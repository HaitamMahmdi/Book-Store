import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faBlogger,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // استيراد الأيقونة من فئة Brands

library.add(
  faArrowRight,
  faStar,
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
  faBlogger,
  faLinkedin
);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
