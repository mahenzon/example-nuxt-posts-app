<template>
  <div>
    <CommentSection
      v-if="comments.length"
      :comments="comments"
      class="mt-12"
    />
    <div v-else-if="commentsStore.isLoading">
      <CommentSectionSkeleton class="mt-12" />
    </div>
    <!-- show "no comments" only if post is present -->
    <div
      v-else-if="post"
      class="text-2xl text-center"
    >
      No comments yet.
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  postId: number
}

const { postId } = defineProps<Props>()
const commentsStore = useCommentsStore()
const postsStore = usePostsStore()

const post = computed((): Post | undefined => postsStore.getPost(postId))
const comments = computed((): Comment[] => commentsStore.getPostComments(postId))

await useAsyncData('get-post-comments', () => commentsStore.loadComments(postId).then(() => true), {
  lazy: true,
})
</script>
