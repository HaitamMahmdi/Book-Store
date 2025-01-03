<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/authStore";
import { firebaseApp, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
const books = ref([]);
const colRef = collection(db, `user-${useAuthStore().user.uid}`);
getDocs(colRef).then((snap) => {
  snap.docs.forEach((el) => {
    if (el) {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://openlibrary.org/works/${el}.json`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          books.value = data.works;
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  });
});
</script>
<template>
  <div class="container my-40">
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
      <h2 class="bg-[#173f5fa4] py-3 px-2 mt-20 text-white font-bold text-3xl">
        Books I Read
      </h2>
      <ul>
        <li>{{ useAuthStore().user.uid }}</li>
      </ul>
    </section>
  </div>
</template>
