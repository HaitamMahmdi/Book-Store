<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/authStore";
import { firebaseApp, db } from "../firebase";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import Massage from "./Massage.vue";
const props = defineProps({ arr: Array });
const authStore = useAuthStore();

const carousel = ref(null);
const isDragging = ref(false);
const startX = ref(null);
const startScrollLeft = ref(null);
const actionResult = ref(null);
const itemz = ref(null);
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

async function updateDocs(e) {
  const docRef = doc(db, `user-${authStore.user.uid}`, "userInfo");
  try {
    // جلب البيانات من الـ Firestore
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // الحصول على الحقل favoriteBooks
      const favoriteBooks = docSnap.data().favoriteBooks || [];

      const itemId = e.target.parentElement.id; // تخزين الـ ID في متغير

      // تحقق إذا كان العنصر موجودًا في favoriteBooks
      if (favoriteBooks.includes(itemId)) {
        // إذا كان موجودًا، قم بإزالته
        await updateDoc(docRef, {
          favoriteBooks: arrayRemove(itemId),
        });
        itemz.value = null;
        console.log(`Item removed from favorites: ${itemId}`);
      } else {
        // إذا لم يكن موجودًا، أضفه
        await updateDoc(docRef, {
          favoriteBooks: arrayUnion(itemId),
        });
        itemz.value = itemId;

        console.log(`Item added to favorites: ${itemId}`);
      }
    } else {
      console.error("No such document!");
    }
  } catch (e) {
    console.error("Error updating array field: ", e);
  }
}
</script>

<template>
  <p v-if="updateDocs === 1">sssss</p>
  <section
    ref="carousel"
    @mousedown="dragStart"
    @mousemove="dargging"
    @mouseup="dragStop"
    class="overflow-hidden relative flex p-5"
    v-if="props.arr.length > 0"
  >
    <div
      class="min-w-[15rem] flex flex-col justify-between select-none p-5 mx-4 shadow-[0px_0px_10px_1px_#0000001c]"
      v-for="item in props.arr"
    >
      <div>
        <div class="flex items-center justify-center w-full">
          <button
            :id="item.cover_edition_key"
            @click="updateDocs"
            class="block relative mr-3"
          >
            <div
              class="absolute w-full h-full flex justify-center items-center transition-all bg-[#0000004d] opacity-0 hover:opacity-100"
            >
              <font-awesome-icon
                class="text-red-500"
                v-if="itemz === item.cover_edition_key"
                :icon="faHeart"
              />
              <font-awesome-icon v-else :icon="faHeart" />
            </div>
            <img
              draggable="false"
              v-if="item.cover_id"
              class="w-full h-full"
              :src="`https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`"
              alt=""
            />
            <p v-else><b>No Img Found</b></p>
          </button>
        </div>
        <h1 class="text-2xl font-semibold text-center mt-4">
          {{ item.title }}
        </h1>
      </div>
    </div>
    <Massage v-if="d" :type="actionResult"></Massage>
  </section>
</template>
<style scoped></style>
