<script setup>
const props = defineProps({ numberOfButtons: Number });
</script>

<template>
  <ul class="flex flex-wrap justify-between w-[12.25rem]">
    <li
      v-for="x in numberOfButtons"
      :key="x"
      class="flex items-center justify-center border w-[2.5rem] h-[2.5rem] border-secondary rounded-full"
    >
      <button
        class="block w-[0.8125rem] h-[0.8125rem] rounded-full bg-secondary"
      ></button>
    </li>
  </ul>
</template>
