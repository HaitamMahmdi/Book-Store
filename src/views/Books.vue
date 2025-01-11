<script setup>
import { ref } from "vue";
import Carousel from "../components/Carousel.vue";

const items = ref([]); // متغير لتخزين قائمة الكتب
const foodBooks = ref([]);
const historyBooks = ref([]);
const businessBooks = ref([]);

fetch(`https://openlibrary.org/subjects/history.json?limit=25`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    historyBooks.value = data.works; // تخزين قائمة الكتب
  })
  .catch((error) => console.error("Error fetching data:", error));

fetch(`https://openlibrary.org/subjects/philosophy.json?limit=25`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    items.value = data.works; // تخزين قائمة الكتب
  })
  .catch((error) => console.error("Error fetching data:", error));

fetch(`https://openlibrary.org/subjects/food.json?limit=25`)
  .then((response) => response.json())
  .then((data) => {
    foodBooks.value = data.works; // تخزين قائمة الكتب
  })
  .catch((error) => console.error("Error fetching data:", error));

fetch(`https://openlibrary.org/subjects/business.json?limit=25`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    businessBooks.value = data.works; // تخزين قائمة الكتب
  })
  .catch((error) => console.error("Error fetching data:", error));
</script>
<template>
  <div class="container my-20">
    <section class="serchForBooks py-5 px-4 bg-[#dfe7e8] rounded-3xl">
      <h2
        class="text-secondary text-center text-[clamp(1.4rem,10vw,3rem)] font-bold"
      >
        Serch For Books
      </h2>
      <form
        @click.prevent
        class="flex flex-wrap justify-center items-center text-center"
      >
        <div class="p-2">
          <label class="block my-3 text-[1.2rem]" for="nameOfTheBook"
            >Book Title</label
          >
          <input
            class="outline-none p-5 w-[18.75rem] rounded-3xl"
            type="text"
            name="nameOfTheBook"
            id=""
          />
        </div>
        <div class="p-2">
          <label class="block my-3 text-[1.2rem]" for="author">Author</label>
          <input
            class="outline-none p-5 w-[18.75rem] rounded-3xl"
            type="text"
            name="author"
            id=""
          />
        </div>
        <div class="p-2">
          <label class="block my-3 text-[1.2rem]" for="subject">Subject</label>
          <input
            class="outline-none p-5 w-[18.75rem] rounded-3xl"
            type="text"
            name="subject"
          />
        </div>
        <div class="p-2">
          <label
            class="block my-3 text-[1.2rem]"
            for="InternationalStandardBookNumber"
            >ISBN</label
          >
          <input
            placeholder="International Standard BookNumber"
            type="text"
            class="outline-none p-5 w-[18.75rem] rounded-3xl"
            name="InternationalStandardBookNumber"
          />
        </div>
        <div class="p-2">
          <label class="block my-3 text-[1.2rem]" for="publishYear"
            >publish Year</label
          >
          <input
            type="text"
            name="publishYear"
            class="outline-none p-5 w-[18.75rem] rounded-3xl"
          />
        </div>
      </form>
    </section>
    <h2
      class="text-[clamp(1.4rem,10vw,2.75rem)] mb-5 mt-40 p-5 bg-sectionBg text-secondary font-bold"
    >
      philosophy Books
    </h2>
    <Carousel :arr="items"></Carousel>

    <h2
      class="text-[clamp(1.4rem,10vw,2.75rem)] mb-5 mt-40 p-5 bg-sectionBg text-secondary font-bold"
    >
      History Books
    </h2>
    <Carousel :arr="foodBooks"></Carousel>

    <h2
      class="text-[clamp(1.4rem,10vw,2.75rem)] mb-5 mt-40 p-5 bg-sectionBg text-secondary font-bold"
    >
      Food Books
    </h2>
    <Carousel :arr="businessBooks"></Carousel>

    <h2
      class="text-[clamp(1.4rem,10vw,2.75rem)] mb-5 mt-40 p-5 bg-sectionBg text-secondary font-bold"
    >
      Business Books
    </h2>
    <Carousel :arr="historyBooks"></Carousel>
  </div>
</template>
