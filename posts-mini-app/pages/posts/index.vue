<template>
  <div>
    <h1>Hello posts!</h1>
    <div v-if="!store.posts.length && store.isLoading">Loading...</div>
    <ul v-else>
      <PostDetails
        v-for="post in store.posts"
        :post="post" 
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
  const store = usePostsStore()
  // useAsyncData provides access to data that resolves asynchronously in an SSR-friendly composable.
  // If your action doesn't resolve a value, you can add any non nullish value:
  await useAsyncData('posts', () => store.loadPosts().then(() => true), {
    lazy: true,
  })
</script>

<style>

</style>
