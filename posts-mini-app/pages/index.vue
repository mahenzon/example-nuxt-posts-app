<template>
  <div>
    <header class="text-black py-20">
      <div class="mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">
          Welcome to my Example Posts App
        </h1>
        <p class="text-lg mb-8">
          Explore the latest posts by clicking the button:
        </p>
        <nuxt-link
          to="/posts"
          class="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
        >View
          Posts
        </nuxt-link>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Index Page for the Posts App',
  meta: [
    {
      name: 'description',
      content: 'Welcome to my Example Posts App',
    },
  ],
})
</script>
