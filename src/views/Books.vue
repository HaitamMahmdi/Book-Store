<script setup>
import { onMounted, ref } from "vue";

const items = ref([]); // متغير لتخزين قائمة الكتب
fetch(`https://openlibrary.org/subjects/philosophy.json?limit=25`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    items.value = data.works; // تخزين قائمة الكتب
  })
  .catch((error) => console.error("Error fetching data:", error));

function getPosison(e) {
  const fater = e.target.parentElement.parentElement;
  const chaild = e.target.getBoundingClientRect();
  const father = e.target.parentElement.parentElement.getBoundingClientRect();
  const relativeX = chaild.left - father.left;
  fater.scrollTo(relativeX, 0);
  console.log(relativeX);
}
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
    <section class="overflow-hidden flex" v-if="items.length > 0">
      <div v-for="item in items" @click="getPosison" class="p-5">
        <img
          v-if="item.cover_id"
          class="min-w-[250px] h-[250px]"
          :src="`https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`"
          alt=""
        />
      </div>
    </section>
  </div>
</template>
