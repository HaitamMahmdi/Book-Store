<script setup>
import { ref, onMounted } from "vue";
import firebaseApp from "../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAuthStore } from "../store/authStore";

const auth = getAuth();
const email = ref(null);
const password = ref(null);
const authStore = useAuthStore();
function SingUpUser() {
  createUserWithEmailAndPassword(auth, email.value, password.value).then(
    (cred) => {
      console.log(`user is created:`, cred.user);
    }
  );
}
onMounted(() => {
  authStore.monitorAuthState();
});
</script>
<template>
  <div class="container my-10 flex justify-center">
    <div
      class="flex flex-wrap justify-center max-w-[80%] rounded-2xl overflow-hidden"
    >
      <div class="w-[50%]">
        <img class="w-full h-full" src="../assets/imgs/singUp.jpg" alt="" />
      </div>
      <form
        @click.prevent
        class="bg-[#dfe7e8] flex flex-col items-center w-[50%] p-5"
        action=""
      >
        <label
          class="block font-bold my-3 text-[clamp(1.4rem,10vw,1.5rem)]"
          for="userName"
        >
          Your Name</label
        >
        <input
          class="outline-none rounded-3xl w-[80%] p-3 text-primary"
          type="text"
          name="userName"
          id=""
        />
        <label
          class="block font-bold my-3 text-[clamp(1.4rem,10vw,1.5rem)]"
          for="userEmail"
          >Email</label
        >
        <input
          class="outline-none rounded-3xl w-[80%] p-3 text-primary"
          type="email"
          v-model="email"
          placeholder="exmple@gmail.com"
          name="userEmail"
          id=""
        />
        <label
          class="block my-3 font-bold text-[clamp(1.4rem,10vw,1.5rem)]"
          for="password"
          >password</label
        >
        <input
          class="outline-none rounded-3xl w-[80%] p-3"
          type="password"
          v-model="password"
          min="6"
          max="12"
          name="password"
          id=""
        />

        <input
          type="submit"
          class="outline-none cursor-pointer rounded-3xl p-3 bg-secondary text-white w-[60%] mt-5"
          value="submit"
          @click="SingUpUser"
        />
        <p
          class="font-bold text-2xl my-5 w-full justify-center flex items-center"
        >
          <span class="block grow h-[2px] mr-[1rem] bg-[#000000]"></span>
          Or
          <span class="block grow h-[2px] ml-[1rem] bg-[#000000]"></span>
        </p>
        <button
          class="singWithGoogle w-[80%] h-[3.37500rem] outline-none rounded-3xl p-3 flex justify-center text-center items-center bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            class="w-[1.87500rem] mr-2"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <p>Sing Up With Google</p>
        </button>
        <button
          class="w-[80%] h-[3.37500rem] my-4 outline-none rounded-3xl p-3 flex justify-center items-center text-white bg-[#3b5998] singWithFacebook"
        >
          <font-awesome-icon
            class="text-[1.5rem] mr-3"
            :icon="['fab', 'facebook']"
          />
          <p>Sing Up With Facebook</p>
        </button>
        <button
          class="singWithX h-[3.37500rem] text-white w-[80%] outline-none rounded-3xl p-3 flex justify-center items-center bg-black"
        >
          <font-awesome-icon
            class="text-[1.5rem] mr-3"
            :icon="['fab', 'x-twitter']"
          />
          <p>Sing Up With X</p>
        </button>
      </form>
    </div>
  </div>
</template>
