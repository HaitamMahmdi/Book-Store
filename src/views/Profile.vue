<script setup>
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";
const router = useRouter();
console.log(`sssss`);

const authStore = useAuthStore();
if (authStore.user) {
  //  router.push({ name: "signUp" });
}
</script>
<template>
  <div class="container flex my-40">
    <section class="profileInfoc flex">
      <div>
        <img
          class="max-w-[21.87500rem] min-h-[25rem]"
          src="../assets/imgs/all ways remember who you are fighting for.jpg"
          alt=""
        />
      </div>
      <div class="p-10 flex flex-col justify-evenly">
        <h1 class="text-5xl font-bold">my Name</h1>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          numquam distinctio officiis qui tempora suscipit amet, error ullam
          blanditiis. Fugit quae consectetur distinctio veritatis quam
          blanditiis nisi dolores id veniam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repellat numquam distinctio officiis qui
          tempora suscipit amet, error ullam blanditiis. Fugit quae consectetur
          distinctio veritatis quam blanditiis nisi dolores id veniam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam
          distinctio officiis qui tempora suscipit amet, error ullam blanditiis.
          Fugit quae consectetur distinctio veritatis quam blanditiis nisi
          dolores id veniam.
        </p>
      </div>
    </section>
    <section class="booksReadLikde">
      <ul>
        <li></li>
      </ul>
    </section>
  </div>
</template>
