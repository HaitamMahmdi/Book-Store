import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// استيراد firebase وتهيئته
import firebaseApp from "./firebase"; // Import Firebase app
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// تهيئة Firebase Authentication و Firestore
const auth = getAuth(firebaseApp); // Initialize Firebase Authentication
const firestore = getFirestore(firebaseApp); // Initialize Firestore

// إضافة Firebase Authentication و Firestore إلى globalProperties للوصول إليهم في جميع المكونات
const app = createApp(App);
app.config.globalProperties.$auth = auth;
app.config.globalProperties.$firestore = firestore;

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
  .component("font-awesome-icon", FontAwesomeIcon) // إضافة مكون الأيقونة
  .use(router) // تفعيل الروتر
  .mount("#app"); // ربط التطبيق بـ #app
