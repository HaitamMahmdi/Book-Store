<script setup>
import { faCheck, faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
const props = defineProps({
  type: {
    type: String,
    required: true,
    default: "succeed",
  },
  postion: {
    type: Object,
    required: true,
    default: () => ({ left: 0, top: 0 }),
  },
});
</script>
<template>
  <div
    class="bg-primary absolute rounded-3xl flex top-0 right-0 text-2xl text-white py-5 p-2 animate-enterFromTop"
    v-if="props.type === 'succeed'"
  >
    <font-awesome-icon :icon="faCheck" />
    <p class="ml-2">the operation was successful.</p>
  </div>
  <div
    class="bg-secondary absolute rounded-3xl flex top-0 right-0 text-2xl text-white py-5 p-2 animate-enterFromTop"
    v-if="props.type === 'singUpError'"
  >
    <font-awesome-icon :icon="faFaceFrown" />
    <p class="ml-2">please SingUp or LogIn</p>
  </div>
  <div
    class="bg-primary absolute rounded-3xl flex top-0 right-0 text-2xl text-white py-5 p-2 animate-enterFromTop"
    v-if="props.type === 'addToFavorit'"
  >
    <font-awesome-icon :icon="faCheck" />
    <p class="ml-2">add To Favorit</p>
  </div>
</template>
