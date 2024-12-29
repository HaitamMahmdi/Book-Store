<script setup>
import { ref } from "vue";

const props = defineProps({ arr: Array });

const carousel = ref(null);
const isDragging = ref(false);
const startX = ref(null);
const startScrollLeft = ref(null);

function dragStart(e) {
  isDragging.value = true;
  startX.value = e.pageX;
  startScrollLeft.value = carousel.value.scrollLeft;
}
function dargging(e) {
  if (!isDragging.value) return;
  carousel.value.scrollLeft = startScrollLeft.value - (e.pageX - startX.value);
}
function dragStop() {
  isDragging.value = false;
}
</script>

<template>
  <section
    ref="carousel"
    @mousedown="dragStart"
    @mousemove="dargging"
    @mouseup="dragStop"
    class="overflow-hidden flex p-5"
    v-if="props.arr.length > 0"
  >
    <div
      class="min-w-[15rem] select-none min-h-[18.75rem] p-5 mx-4 shadow-[0px_0px_10px_1px_#0000001c]"
      v-for="item in props.arr"
    >
      <div class="flex items-center justify-center h-[17rem] w-full">
        <img
          draggable="false"
          v-if="item.cover_id"
          class="w-full h-full"
          :src="`https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`"
          alt=""
        />
        <p v-else><b>No Img Found</b></p>
      </div>
      <h1 class="text-2xl font-semibold text-center mt-4">
        {{ item.title }}
      </h1>
      <div class="takeAction"></div>
    </div>
  </section>
</template>
<style scoped></style>
