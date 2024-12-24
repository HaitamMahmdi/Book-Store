<script setup>
import { onMounted, ref, watch } from "vue";
const props = defineProps({
  imagesPerPage: Number,
  imagSize: String,
  url: String,
});
let currentPage = ref(1); // الصفحة الحالية

const items = ref([]); // متغير لتخزين قائمة الكتب
fetch(props.url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    items.value = data.works; // تخزين قائمة الكتب
  })
  .catch((error) => console.error("Error fetching data:", error));

function getImagesForPage(page) {
  const startIndex = page * props.imagesPerPage;
  const endIndex = startIndex + props.imagesPerPage;
  return items.value.slice(startIndex, endIndex);
}
function toNextPage(e) {
  currentPage.value = +e.target.getAttribute("id");
}
</script>

<template>
  <section
    v-if="items.length > 0"
    class="flex flex-wrap items-center justify-evenly"
  >
    <section
      class="w-[18.13rem] p-4 rounded-[0.31rem] shadow-[0px_0px_20px_0px_#9797973b] h-[21.25rem]"
      v-for="item in getImagesForPage(currentPage)"
      :key="item.key"
    >
      <div class="w-[8.75rem] h-[13.1875rem] mx-auto mb-3">
        <img
          class="w-full h-full"
          width="100%"
          height="100%"
          :src="`https://covers.openlibrary.org/b/id/${item.cover_id}-${props.imagSize}.jpg`"
          alt=""
        />
      </div>
      <div class="text-center">
        <h4>{{ item.title }}</h4>
        <p>{{ item.authors[0].name }}</p>
      </div>
    </section>
  </section>

  <ul class="flex mx-auto mt-20 flex-wrap w-fit">
    <li
      @click="toNextPage"
      v-for="(x, index) in Math.ceil(items.length / props.imagesPerPage)"
      :key="x"
      :id="index"
      class="flex mx-2 items-center justify-center border w-[2.5rem] h-[2.5rem] border-secondary rounded-full"
    >
      <button
        class="block w-[0.8125rem] h-[0.8125rem] rounded-full bg-secondary"
      ></button>
    </li>
  </ul>
</template>
