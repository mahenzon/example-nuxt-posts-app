<template>
  <div>
    <h1>Hello posts!</h1>
    <div v-if="!posts.length && isLoading">Loading...</div>
    <div v-else>
      <PostDetails 
        v-for="post in posts"
        :key="post.id"
        :post="post"
        />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const store = usePostsStore()
  // useAsyncData provides access to data that resolves asynchronously in an SSR-friendly composable.
  // If your action doesn't resolve a value, you can add any non nullish value:
  await useAsyncData('get-posts', () => store.loadPosts().then(() => true), {
    lazy: true,
  })

  const { posts, isLoading } = storeToRefs(store)
</script>

<style>

</style>
