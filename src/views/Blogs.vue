<script setup>
import { ref } from "vue";
import BlogCard from "../components/BlogCard.vue";

const url = `https://newsapi.org/v2/everything?q=books&apiKey=1e4f3628160f4bfb8d6e380d56aa703c`;
const blogs = ref([]);

// إرسال طلب إلى API
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // تنظيف المصفوفة قبل إضافة المقالات الجديدة
    blogs.value = []; // إعادة تعيين المصفوفة لضمان عدم التكرار
    data.articles.forEach((article) => {
      // فحص ما إذا كانت المقالة موجودة بالفعل في المصفوفة
      if (
        !blogs.value.some(
          (existingArticle) => existingArticle.url === article.url
        )
      ) {
        blogs.value.push(article);
      }
    });
    console.log(blogs.value, `ssss`);
  })
  .catch((error) => {
    console.error("Error fetching the news:", error);
  });
</script>

<template>
  <div class="container">
    <div class="text-center my-5">
      <h2 class="text-[clamp(1.5rem,10vw,3rem)] text-primary font-bold">
        Latest Articles
      </h2>
      <p class="text-[1.125rem] max-w-[50.8rem] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et id eos
        similique cumque facere aperiam maxime voluptatem nihil recusandae odit
      </p>
    </div>
    <section class="flex flex-wrap justify-center" v-if="blogs.length >= 1">
      <BlogCard
        v-for="(article, index) in blogs"
        :key="article.url"
        :Title="article.description"
        :Image="article.urlToImage"
      ></BlogCard>
    </section>
  </div>
</template>
