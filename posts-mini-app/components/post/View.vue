<template>
  <div>
    <PostDetails
      v-if="post"
      :post="post"
    />
    <div v-else-if="postsStore.isLoading">
      <PostSkeleton />
    </div>
    <div
      v-else
      class="text-3xl text-center"
    >
      Post #<code>{{ postId }}</code> not found
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  postId: number
}

const { postId } = defineProps<Props>()
const postsStore = usePostsStore()
const post = computed((): Post | undefined => postsStore.getPost(postId))

await useAsyncData('get-post', () => postsStore.loadPost(postId).then(() => true), {
  lazy: true,
})
</script>

<style>

</style>
