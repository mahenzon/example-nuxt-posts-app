<template>
  <div>
    <h1 class="big-header">
      This is the Post details page
    </h1>
    <PostDetails
      v-if="post"
      :post="post"
    />
    <div v-else-if="postsStore.isLoading">
      <PostSkeleton />
    </div>
    <div v-else>
      Post <code>{{ id }}</code> not found
    </div>

    <div v-if="comments.length">
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          {{ comment.id }} {{ comment.body }}
        </li>
      </ul>
    </div>
    <div v-else-if="commentsStore.isLoading">
      Loading comments...
      <!-- todo: skeleton -->
    </div>
    <div
      v-else
      class="text-2xl text-center"
    >
      No comments yet.
    </div>
  </div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
const postsStore = usePostsStore()
const commentsStore = useCommentsStore()

const intId = Number(id)
const post = computed((): Post | undefined => postsStore.getPost(intId))
const comments = computed((): Comment[] => commentsStore.getPostComments(intId))

if (Number.isInteger(intId)) {
  await useAsyncData('get-post', () => postsStore.loadPost(intId).then(() => true), {
    lazy: true,
  })
  await useAsyncData('get-post-comments', () => commentsStore.loadComments(intId).then(() => true), {
    lazy: true,
  })
}
else {
  // any error needed?
  console.log('invalid post id', id)
}
</script>

<style>

</style>
