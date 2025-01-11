<script setup>
import { ref } from "vue";

const url = `https://newsapi.org/v2/everything?q=books&apiKey=1e4f3628160f4bfb8d6e380d56aa703c`;
const blogs = ref(null);
// إرسال طلب إلى API
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    blogs.value = response.json();
  })
  .then((data) => {
    // عرض المقالات
    console.log("Articles:", data.articles);
    // على سبيل المثال، عرض العناوين فقط
    data.articles.forEach((article) => {
      console.log(article.title);
    });
  })
  .catch((error) => {
    console.error("Error fetching the news:", error);
  });
</script>
<template>
  <div class="container">
    <div>
      <h2 class="text-[clamp(1.5rem,10vw,3rem)] font-bold">Blogs To Read</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et id eos
        similique cumque facere aperiam maxime voluptatem nihil recusandae odit
      </p>
    </div>
  </div>
</template>
