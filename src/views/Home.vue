<script setup>
import CarouselCom from "../components/CarouselCom.vue";
import { onMounted, ref } from "vue";

const items = ref([]); // متغير لتخزين قائمة الكتب
const istrue = ref(false);
fetch(`https://openlibrary.org/subjects/philosophy.json?limit=24`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    items.value = data.works; // تخزين قائمة الكتب
    istrue.value = true;
  })
  .catch((error) => console.error("Error fetching data:", error));

const currentBook = ref(0);
const featuredBook = ref(null);

onMounted(() => {
  if (items.value && featuredBook.value) {
    setInterval(() => {
      if (currentBook.value <= items.value.length - 1) {
        currentBook.value += 1;
      } else {
        currentBook.value = 0;
      }
    }, 4000);
  }
});
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

function startCountdown(durationInSeconds) {
  let remainingTime = durationInSeconds;

  const timerInterval = setInterval(() => {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (24 * 60 * 60));
    const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;
    // Display the countdown
    countdown.value.days = days;
    countdown.value.hours = hours;
    countdown.value.minutes = minutes;
    countdown.value.seconds = seconds;
    // Decrease the remaining time
    remainingTime--;
    // Stop the timer when it reaches zero
    if (remainingTime < 0) {
      clearInterval(timerInterval);
      console.log("Countdown complete!");
    }
  }, 1000); // Update every second
}

// Example usage: Start a countdown from 1 day (24 hours)
startCountdown(18432 * 60 * 60);
console.log(countdown.value);
</script>
<template>
  <div
    class="landing bg-hero1 w-full min-h-[calc(100vh-158px)] bg-cover bg-center"
  >
    <div class="container pt-[7.25rem]">
      <div class="text-primary">
        <h1 class="text-[clamp(1rem,10vw,3.75rem)] font-semibold mb-5">
          ipsum dolor si
        </h1>
        <p class="text-2xl max-w-[37.94rem] leading-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.
        </p>
      </div>
      <button class="bg-primary text-white px-5 py-3 rounded-lg mt-5">
        Read More
      </button>
    </div>
  </div>
  <div class="container mt-40">
    <section class="Top-Categories flex justify-center gap-[37px] flex-wrap">
      <div
        class="w-[23.56rem] min-h-[24.63rem] relative flex justify-center items-end"
      >
        <img
          class="absolute"
          width="100%"
          height="100%"
          src="../assets/imgs/gig4.png"
          alt=""
        />
        <p
          class="z-10 relative mb-[1.87500rem] font-extrabold text-white text-3xl"
        >
          Higher Education
        </p>
      </div>
      <div
        class="w-[23.56rem] flex flex-col justify-between items-center text-center min-h-[24.63rem] relative"
      >
        <h2 class="font-bold text-[clamp(1.4rem,10vw,2.88rem)] text-primary">
          Explore our Top Categories
        </h2>
        <button
          class="font-bold text-[clamp(1rem,10vw,1.5rem)] w-[12rem] mb-[4.0625rem] h-[4.0625rem] text-white bg-[#ED553B] rounded-lg"
        >
          View All
        </button>
      </div>
      <div
        class="w-[23.56rem] min-h-[24.63rem] relative flex justify-center items-end"
      >
        <img
          class="absolute"
          width="100%"
          height="100%"
          src="../assets/imgs/gig5.png"
          alt=""
        />
        <p
          class="z-10 relative mb-[1.87500rem] font-extrabold text-white text-3xl"
        >
          Finance Books
        </p>
      </div>
      <div
        class="w-[23.56rem] min-h-[24.63rem] relative flex justify-center items-end"
      >
        <img
          class="absolute"
          width="100%"
          height="100%"
          src="../assets/imgs/gig3.png"
          alt=""
        />
        <p
          class="z-10 relative mb-[1.87500rem] font-extrabold text-white text-3xl"
        >
          Engineering Books
        </p>
      </div>
      <div
        class="w-[23.56rem] min-h-[24.63rem] relative flex justify-center items-end"
      >
        <img
          class="absolute h-full"
          width="100%"
          height="100%"
          src="../assets/imgs/gig1.png"
          alt=""
        />
        <p
          class="z-10 relative mb-[1.87500rem] font-extrabold text-white text-3xl"
        >
          Management Books
        </p>
      </div>
      <div
        class="w-[23.56rem] min-h-[24.63rem] relative flex justify-center items-end"
      >
        <img
          class="absolute"
          width="100%"
          height="100%"
          src="../assets/imgs/gig2.png"
          alt=""
        />
        <p
          class="z-10 relative mb-[1.87500rem] font-extrabold text-white text-3xl"
        >
          Commerce books
        </p>
      </div>
    </section>
    <section
      class="flex flex-wrap my-20 items-center bg-sectionBg justify-evenly"
    >
      <div class="max-w-[40.19rem]">
        <h3
          class="text-[clamp(1.4rem,10vw,1.88rem)] mb-4 text-primary font-extrabold"
        >
          Access, Read, Practice & Engage <br />
          with Digital Content (eBook)
        </h3>
        <p class="leading-8 text-lg text-[#393280]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo , lacus ut
          magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <div class="flex min-w-[37.50rem] mt-10">
          <input
            class="outline-0 h-[3.75rem] flex-grow"
            placeholder="Enter your email address"
            type="Email"
            name=""
            id=""
          />
          <input
            class="bg-secondary w-[9.56rem] font-bold text-lx text-white rounded-r-lg"
            type="button"
            value="Login"
          />
        </div>
      </div>
      <div class="max-w-[36.13rem] h-full">
        <img
          width="100%"
          height="100%"
          src="../assets/imgs/readMore.png"
          alt=""
        />
      </div>
    </section>

    <section class="pb-[5.75rem] border-b border-[#E0E0E0]">
      <div class="text-center mb-20">
        <h2 class="text-primary font-semibold text-4xl">New Release Books</h2>
        <p class="text-lg text-textSecondary my-4">
          1000+ books are published by different authors everyday.
        </p>
        <a class="font-bold text-secondary" href=""
          >View all products <font-awesome-icon icon="arrow-right"
        /></a>
      </div>
      <CarouselCom
        :url="'https://openlibrary.org/subjects/food.json?limit=24'"
        :imagSize="'M'"
        :imagesPerPage="4"
      >
      </CarouselCom>
    </section>
    <section ref="featuredBook" class="py-[5.75rem] transition">
      <article v-if="items.length > 0" class="flex flex-wrap justify-between">
        <header
          class="w-[25.12rem] p-[1.25rem] shadow-[0px_0px_20px_0px_#9797973b]"
        >
          <img
            class="w-full h-full"
            :src="`https://covers.openlibrary.org/b/id/${items[currentBook].cover_id}-L.jpg`"
            alt=""
          />
        </header>
        <section class="py-[7.1875rem]">
          <p class="font-semibold text-textSecondary">
            Featured Book of the week
          </p>
          <h3 class="text-primary text-3xl font-semibold my-2.5">
            {{ items[currentBook].title }}
          </h3>
          <div>
            <font-awesome-icon
              v-for="x in 5"
              :key="x"
              class="text-[#FFD700] text-lg"
              icon="star"
            />
          </div>
          <p class="text-textSecondary text-lg max-w-[50rem] my-8">
            Jump start your book reading by quickly check through the popular
            book categories. 1000+ books are published by different authors
            everyday. Buy your favourite books on TreeBooks Today.
          </p>
          <button
            class="font-medium text-primary w-[12.3125rem] h-[3.8125rem] border border-primary rounded-md"
          >
            View more <font-awesome-icon class="ml-3" icon="arrow-right" />
          </button>
        </section>
      </article>
    </section>
    <section
      class="offersSection bg-sectionBg p-[1.5rem] rounded-lg flex flex-wrap"
    >
      <div class="max-w-[36.75rem] pt-10 pl-5">
        <h3 class="text-primary text-[clamp(1rem,10vw,2.81rem)] font-bold">
          All books are 50% off now! Don't miss such a deal!
        </h3>
        <p class="text-textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac.
        </p>
        <ul class="countDown mt-10 flex flex-wrap">
          <li
            class="w-[4.75rem] mr-2 h-[4.75rem] flex items-center justify-center font-bold text-3xl text-secondary"
          >
            {{ countdown.days }}D
          </li>
          <li
            class="w-[4.75rem] mr-2 h-[4.75rem] flex items-center justify-center font-bold text-3xl text-secondary"
          >
            {{ countdown.hours }}H
          </li>
          <li
            class="w-[4.75rem] mr-2 h-[4.75rem] flex items-center justify-center font-bold text-3xl text-secondary"
          >
            {{ countdown.minutes }}M
          </li>
          <li
            class="w-[4.75rem] mr-2 h-[4.75rem] flex items-center justify-center font-bold text-3xl text-secondary"
          >
            {{ countdown.seconds }}S
          </li>
        </ul>
      </div>
      <div class="max-w-[39.50rem] max-h-[30.50rem]">
        <img class="w-full h-full" src="../assets/imgs/Unsplash.png" alt="" />
      </div>
    </section>
  </div>
  <section
    class="joinNewsLetter bg-sectionBg max-w-[1536px] min-h-[31.25rem] my-40"
  >
    <div
      class="max-w-[78.8125rem] relative min-h-[20.8125rem] m-auto text-white bg-secondary text-center p-10"
    >
      <h2
        class="font-bold m-auto max-w-[48rem] text-[clamp(1.4rem,10vw,2.88rem)]"
      >
        Subscibe to Our Newsletter
      </h2>
      <p class="max-w-[48rem] m-auto">
        Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,
        consectetur. Elit adipiscing enim pharetra hac.
      </p>
      <div
        class="absolute flex items-center justify-center p-3 bg-white min-h-[6.25rem] max-w-[43rem] translate-x-[-50%] translate-y-[50%] left-2/4 bottom-0"
      >
        <input
          class="h-[4.4375rem] w-[26.1875rem] outline-0 text-black"
          type="email"
          placeholder="example@gmail.com"
          name=""
          id=""
        />
        <input
          class="w-[12.87500rem] bg-secondary h-[4.4375rem]"
          type="button"
          value="SUBCRIBE"
        />
      </div>
    </div>
  </section>
  <div class="container">
    <section class="newArticles">
      <div class="text-center">
        <p class="text-textSecondary">Read our articles</p>

        <h2
          class="text-[clamp(1.4rem,10vw,3rem)] flex items-center text-primary"
        >
          <span class="block grow h-[2px] mr-[3.9375rem] bg-[#C8C8C8]"></span>
          Latest Articles
          <span class="block grow h-[2px] ml-[3.9375rem] bg-[#C8C8C8]"></span>
        </h2>
      </div>
      <div class="flex flex-wrap">
        <article class="max-w-[26.12500rem] p-[1.5rem]" v-for="x in 3" :key="x">
          <header class="w-full h-[19rem]">
            <img class="w-full h-full" src="../assets/imgs/1.png" alt="" />
          </header>
          <section>
            <p class="text-[#74642F] my-4">2 aug, 2021</p>
            <p class="text-[clamp(1.4rem,10vw,1.6rem)] text-primary">
              Reading books always makes the moments happy
            </p>
          </section>
          <footer
            class="border-t text-primary mt-5 border-[#C8C8C8] flex justify-end py-4"
          >
            
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <font-awesome-icon class="mx-2" :icon="['fab', 'instagram']" />
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </footer>
        </article>
      </div>
    </section>
  </div>
</template>
