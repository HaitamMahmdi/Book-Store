<script setup>
import { useAuthStore } from "../store/authStore";
const authStore = useAuthStore;
</script>
<template>
  <div class="container flex my-40">
    <section class="profileInfo"></section>
    <section class="booksReadLikde"></section>
  </div>
</template>
