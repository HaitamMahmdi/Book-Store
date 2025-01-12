<script setup>
import { useAuthStore } from "./store/authStore";
import { ref } from "vue";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faBlogger,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // استيراد الأيقونة من فئة Brands
import {
  faPhone,
  faUser,
  faBars,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { onMounted } from "vue";
// Add icons to the library
const AuthStore = useAuthStore();
const showList = ref(false);
onMounted(() => {
  AuthStore.monitorAuthState();
});
</script>

<template>
  <header>
    <div class="container m-auto">
      <div
        class="text-2xl w-full bg-primary flex flex-wrap items-center justify-between px-3 text-white min-h-[3.50rem]"
      >
        <p class=""><font-awesome-icon :icon="faPhone" /> +91 8374902234</p>
        <ul class="flex min-w-[15.6875rem] justify-between">
          <li>
            <a href=""><font-awesome-icon :icon="faFacebook" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon :icon="faInstagram" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon :icon="faTwitter" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon :icon="faBlogger" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon :icon="faLinkedin" /></a>
          </li>
        </ul>
      </div>
      <nav
        class="flex flex-wrap relative justify-between text-lg items-center py-[0.5rem]"
      >
        <button
          @click="showList = !showList"
          class="xs:block sm:hidden text-2xl p-4"
        >
          <font-awesome-icon :icon="faBars" />
        </button>

        <ul
          v-if="showList"
          class="xs:block absolute z-30 shdow-[-1px_20px_18px_1px_#dddddd7d] sm:hidden top-full left-0 bg-white w-full web-links flex justify-between flex-wrap"
        >
          <li>
            <RouterLink
              @click="showList = !showList"
              :to="{ name: 'Home' }"
              class="block border-b border-[#D1D1D1] p-5"
              href=""
              >HOME</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click="showList = !showList"
              :to="{ name: 'aboutUs' }"
              class="border-b border-[#D1D1D1] block p-5"
              >ABOUT US</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click="showList = !showList"
              :to="{ name: 'books' }"
              class="border-b border-[#D1D1D1] block p-5"
              >BOOKS</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click="showList = !showList"
              :to="{ name: 'FAQs' }"
              class="border-b border-[#D1D1D1] block p-5"
            >
              FAQs</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click="showList = !showList"
              :to="{ name: 'blogs' }"
              class="border-r border-[#D1D1D1] block p-5"
              >BLOG</RouterLink
            >
          </li>
        </ul>

        <div class="logo w-[5.38rem] h-[5.38rem]">
          <img
            width="100%"
            height="100%"
            src="./assets/imgs/Book_Store_Symbol.png"
            alt=""
          />
        </div>
        <ul class="xs:hidden sm:flex web-links justify-between flex-wrap">
          <li>
            <RouterLink
              :to="{ name: 'Home' }"
              class="block border-r border-[#D1D1D1] px-5"
              href=""
              >HOME</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'aboutUs' }"
              class="border-r border-[#D1D1D1] block px-5"
              >ABOUT US</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'books' }"
              class="border-r border-[#D1D1D1] block px-5"
              >BOOKS</RouterLink
            >
          </li>
          <li></li>
          <li>
            <RouterLink
              :to="{ name: 'FAQs' }"
              class="border-r border-[#D1D1D1] block px-5"
            >
              FAQs</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'blogs' }"
              class="border-r border-[#D1D1D1] block px-5"
              >BLOG</RouterLink
            >
          </li>
        </ul>
        <ul class="user-links flex flex-wrap">
          <li>
            <RouterLink
              v-if="!AuthStore.user"
              class="block p-4"
              :to="{ name: 'singUp' }"
              >SingUp
            </RouterLink>
            <RouterLink
              v-else
              class="flex items-center justify-center rounded-full w-[3.75rem] h-[3.75rem] border border-primary"
              :to="{ name: 'Profile' }"
              ><font-awesome-icon class="text-primary" :icon="faUser"
            /></RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
  <footer class="text-white py-[6.3125rem] bg-secondary">
    <div class="container flex flex-wrap justify-between max-w-[72.1875rem]">
      <div>
        <img src="./assets/imgs/logo.png" alt="" />
        <p class="mt-5">
          Nostrud exercitation ullamco laboris nisi <br />
          ut aliquip ex ea commodo consequat.
        </p>
        <div
          class="text-[clamp(1.4rem,10vw,2rem)] mt-10 flex flex-wrap justify-between max-w-[15.75rem]"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </div>
      </div>
      <ul>
        <h3 class="font-semibold text-2xl mb-5">COMPANY</h3>
        <li>
          <a class="block mb-2" href="">HOME</a>
        </li>
        <li>
          <a class="block mb-2" href="">ABOUT US</a>
        </li>
        <li>
          <a class="block mb-2" href="">BOOKS</a>
        </li>
        <li>
          <a class="block mb-2" href="">NEW RELEASE</a>
        </li>
        <li>
          <a class="block mb-2" href=""> CONTACT US</a>
        </li>
        <li>
          <a class="" href="">BLOG</a>
        </li>
      </ul>
      <ul>
        <h3 class="font-semibold text-2xl mb-5">Importent Links</h3>
        <li>
          <a href="" class="block mb-2">Privacy Policy</a>
        </li>
        <li>
          <a href="" class="block mb-2">FAQs</a>
        </li>
        <li>
          <a href="">Terms of Service</a>
        </li>
      </ul>
      <div class="w-full text-lg font-bold flex justify-between mt-[6.0625rem]">
        <p>© 2022 Arihant. All Rights Reserved.</p>
        <p class="">Privacy | Terms of Service</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
