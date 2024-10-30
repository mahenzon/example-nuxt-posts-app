<template>
  <div ref="comments-block" class="relative">
    <div
      class="absolute -inset-x-3 md:-inset-x-5 lg:-inset-x-4 -inset-y-2 -z-10 rounded-lg transition-colors duration-700"
      :class="{ 'bg-amber-100': isFocused }"
    />

    <Transition name="fade" mode="out-in">
      <CommentSection
        v-if="comments.length"
        :comments="comments"
        class="mt-6 md:mt-12"
      />
      <!--
      if comments still loading,
      but no post found already,
      probably no skeleton needed
     -->
      <div v-else-if="commentsStore.isLoading && !noPostFound">
        <CommentSectionSkeleton class="mt-6 md:mt-12" />
      </div>
      <!-- show "no comments" only if post is present -->
      <div
        v-else-if="post"
        class="text-2xl text-center"
      >
        No comments yet.
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
const postId = Number(id)

const commentsStore = useCommentsStore()
const postsStore = usePostsStore()

const post = computed((): Post | undefined => postsStore.getPost(postId))
const comments = computed((): Comment[] => commentsStore.getPostComments(postId))
const noPostFound = computed((): boolean => !postsStore.isLoading && !post.value)

await useAsyncData('get-post-comments', () => commentsStore.loadComments(postId).then(() => true), {
  lazy: true,
})

const { unsubscribe, isFocused } = useFocusCommentsBlock('comments-block')

onBeforeUnmount(() => {
  unsubscribe()
})
</script>
