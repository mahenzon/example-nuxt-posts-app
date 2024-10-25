<template>
  <div>
    <h1 class="big-header">
      This is my Posts page
    </h1>
    <div v-if="!posts.length && isLoading">
      <PostSkeleton v-for="idx in 3" :key="idx" />
    </div>
    <div v-else-if="posts.length">
      <PostDetails
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
    <div
      v-else
      class="text-3xl text-center"
    >
      No posts found, sorry
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
