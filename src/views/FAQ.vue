<script setup>
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { reactive } from "vue";

const fAQs = reactive({
  group: [
    {
      title: `How can I create an account on the website?`,
      showAnswer: false,
    },

    {
      title: `Are the books on the website free or paid?`,
      showAnswer: false,
    },
    {
      title: ` Can I download the books I purchase?`,
      showAnswer: false,
    },
    {
      title: `How do I search for specific books or authors?`,
      showAnswer: false,
    },
  ],
  group1: [
    {
      title: `What payment methods do you accept?`,
      showAnswer: false,
    },

    {
      title: `Is there a refund policy for purchased books?`,
      showAnswer: false,
    },
    {
      title: `Can I access my books on multiple devices?`,
      showAnswer: false,
    },
    {
      title: `How do I search for specific books or authors?`,
      showAnswer: false,
    },
  ],
});
</script>
<template>
  <div class="container flex flex-wrap my-20 justify-center mid">
    <div class="w-full text-center mb-20">
      <h2 class="text-[clamp(1.5rem,10vw,3rem)] text-primary font-bold">
        Here are 8 frequently asked questions
      </h2>
      <p class="text-[1.125rem] max-w-[50.8rem] px-2 mt-4 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab non
        dignissimos adipisci
      </p>
    </div>
    <ul class="w-[40rem]">
      <li class="p-4" v-for="(question, index) in fAQs.group" :key="index">
        <button
          @click="question.showAnswer = !question.showAnswer"
          class="block bg-secondary text-white w-full p-4"
        >
          <h2
            class="text-[clamp(1rem,5vw,1.5rem)] flex justify-between font-semibold items-center"
          >
            {{ question.title }}
            <font-awesome-icon v-if="!question.showAnswer" :icon="faPlus" />
            <font-awesome-icon v-if="question.showAnswer" :icon="faMinus" />
          </h2>
        </button>
        <p v-if="question.showAnswer" class="text-lg p-4 bg-sectionBg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          exercitationem accusantium similique sit expedita earum. Dicta enim
          voluptas excepturi vero provident quos porro? Fugiat architecto
          laborum minus ullam obcaecati perspiciatis.
        </p>
      </li>
    </ul>
    <ul class="w-[40rem]">
      <li class="p-4" v-for="(question, index) in fAQs.group1" :key="index">
        <button
          @click="question.showAnswer = !question.showAnswer"
          class="block bg-secondary text-white w-full p-4"
        >
          <h2
            class="text-[clamp(1rem,5vw,1.5rem)] flex justify-between font-semibold items-center"
          >
            {{ question.title }}
            <font-awesome-icon v-if="!question.showAnswer" :icon="faPlus" />
            <font-awesome-icon v-if="question.showAnswer" :icon="faMinus" />
          </h2>
        </button>
        <p v-if="question.showAnswer" class="text-lg p-4 bg-sectionBg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          exercitationem accusantium similique sit expedita earum. Dicta enim
          voluptas excepturi vero provident quos porro? Fugiat architecto
          laborum minus ullam obcaecati perspiciatis.
        </p>
      </li>
    </ul>
  </div>
</template>
