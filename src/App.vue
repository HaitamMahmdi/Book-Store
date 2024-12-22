<script setup>
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
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
// Add icons to the library
const a = faFacebook;
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
        class="flex flex-wrap justify-between text-lg items-center py-[0.5rem]"
      >
        <div class="logo w-[5.38rem] h-[5.38rem]">
          <img
            width="100%"
            height="100%"
            src="./assets/imgs/Book_Store_Symbol.png"
            alt=""
          />
        </div>
        <ul class="web-links flex justify-between flex-wrap">
          <li>
            <RouterLink
              :to="{ name: 'Home' }"
              class="block border-r border-[#D1D1D1] px-5"
              href=""
              >HOME</RouterLink
            >
          </li>
          <li>
            <a class="border-r border-[#D1D1D1] block px-5" href="">ABOUT US</a>
          </li>
          <li>
            <a class="border-r border-[#D1D1D1] block px-5" href=""
              >NEW RELEASE</a
            >
          </li>
          <li>
            <a class="border-r border-[#D1D1D1] block px-5" href="">
              CONTACT US</a
            >
          </li>
          <li>
            <a class="px-5" href="">BLOG</a>
          </li>
        </ul>
        <ul class="user-links flex flex-wrap">
          <li>
            <a class="block px-4" href=""
              ><font-awesome-icon :icon="faUser" />
            </a>
          </li>
          <li>
            <a class="block px-4" href=""
              ><font-awesome-icon :icon="faHeart" />
            </a>
          </li>
          <li>
            <a class="block px-4" href=""
              ><font-awesome-icon :icon="faBagShopping" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
