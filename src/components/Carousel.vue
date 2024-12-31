<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/authStore";
import Massage from "./Massage.vue";
const props = defineProps({ arr: Array });

const carousel = ref(null);
const isDragging = ref(false);
const startX = ref(null);
const startScrollLeft = ref(null);
const actionResult = ref(null);
const authStore = useAuthStore();
const d = ref(false);
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

function addToFavorit() {
  d.value = true;
  if (!authStore.user) {
    setTimeout(() => {
      d.value = false;
    }, 2500);
    return (actionResult.value = "singUpError");
  } else {
    setTimeout(() => {
      d.value = false;
    }, 2500);
    return (actionResult.value = "addToFavorit");
  }
}
</script>

<template>
  <section
    ref="carousel"
    @mousedown="dragStart"
    @mousemove="dargging"
    @mouseup="dragStop"
    class="overflow-hidden relative flex p-5"
    v-if="props.arr.length > 0"
  >
    <div
      class="min-w-[15rem] flex flex-col justify-between select-none min-h-[18.75rem] p-5 mx-4 shadow-[0px_0px_10px_1px_#0000001c]"
      v-for="item in props.arr"
    >
      <div>
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
      </div>
      <div class="takeAction flex mt-3">
        <button @click="addToFavorit" class="block mr-3">
          <svg
            fill="#000000"
            height="30px"
            width="30px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 471.701 471.701"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"
                />
              </g>
            </g>
          </svg>
        </button>
        <button class="block">
          <svg
            fill="#000000"
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 507.447 507.447"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M96.877,0v507.447l156.846-168.091L410.57,507.447V0H96.877z M390.877,457.476L253.724,310.49L116.57,457.476V19.692
			h274.308V457.476z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <Massage v-if="d" :type="actionResult"></Massage>
  </section>
</template>
<style scoped></style>
