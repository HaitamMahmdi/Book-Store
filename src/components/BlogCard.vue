<script setup>
const props = defineProps({
  Title: {
    type: String,
    required: true,
    default: `Reading books always makes the moments happy`,
  },
  Image: {
    type: String,
    required: true,
    default: `../assets/imgs/1.png`,
  },
});
</script>
<template>
  <article class="max-w-[26.12500rem] p-[1.5rem]" v-for="x in 3" :key="x">
    <header class="w-full h-[19rem]">
      <img class="w-full h-full" :src="props.Image" alt="" />
    </header>
    <section>
      <p class="text-[#74642F] my-4">2 aug, 2021</p>
      <p class="text-[clamp(1.4rem,10vw,1.6rem)] text-primary">
        {{ props.Title }}
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
</template>
