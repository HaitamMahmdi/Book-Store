import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
const pinia = createPinia();
const app = createApp(App);
// استيراد أيقونات إضافية
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faXTwitter,
  faBlogger,
  faYoutube,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"; // استيراد الأيقونات من فئة Brands

// إضافة الأيقونات إلى المكتبة
library.add(
  faArrowRight,
  faStar,
  faXTwitter,
  faFacebook,
  faGoogle,
  faYoutube,
  faInstagram,
  faTwitter,
  faBlogger,
  faLinkedin
);

// تفعيل التطبيق مع المكونات والروتر
app
  .use(pinia)
  .component("font-awesome-icon", FontAwesomeIcon) // إضافة مكون الأيقونة
  .use(router) // تفعيل الروتر
  .mount("#app"); // ربط التطبيق بـ #app
